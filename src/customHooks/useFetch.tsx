import { useCallback, useEffect, useState } from "react";

const useFetch = (
  link: string = "https://jsonplaceholder.typicode.com/posts/1"
) => {
  const [serverData, setServerData] = useState<null | any>(null);
  const [errorRequest, setErrorRequest] = useState<string | unknown>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchRequest = useCallback(() => {
    setLoading(true);
    try {
      fetch(link)
        .then((res) => res.json())
        .then((data) => {
          setServerData(data);
          setLoading(false);
        });
    } catch (e: any) {
      console.log(e);
      setErrorRequest(e.message);
      setLoading(false);
    }
  }, [link]);

  useEffect(() => {
    fetchRequest();
  }, [fetchRequest]);

  return { data: serverData, error: errorRequest, loading };
};

export default useFetch;
