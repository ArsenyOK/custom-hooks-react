import { useCallback, useEffect, useState } from "react";

const useFetch = (
  link: string = "https://jsonplaceholder.typicode.com/posts/1"
) => {
  const [serverData, setServerData] = useState<null | [] | {}>(null);
  const [errorRequest, setErrorRequest] = useState<string | unknown>("");

  console.count();

  const fetchRequest = useCallback(() => {
    try {
      fetch(link)
        .then((res) => res.json())
        .then((data) => {
          setServerData(data);
        });
    } catch (e: any) {
      console.log(e);
      setErrorRequest(e.message);
    }
  }, [link]);

  useEffect(() => {
    fetchRequest();
  }, [fetchRequest]);

  return { data: serverData, error: errorRequest };
};

export default useFetch;
