import { useCallback, useState } from "react";

const useToggle = (initialState: boolean = false): [boolean, () => void] => {
  const [toggle, setStateToggle] = useState<boolean>(initialState);

  const setToggle = useCallback((): void => {
    setStateToggle((prev: boolean) => !prev);
  }, []);

  return [toggle, setToggle];
};

export default useToggle;
