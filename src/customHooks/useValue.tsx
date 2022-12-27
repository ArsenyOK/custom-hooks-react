import React, { useCallback, useState } from "react";

const useValue = (): [
  string,
  (e: { target: { value: React.SetStateAction<string> } }) => void
] => {
  const [value, setValueState] = useState<string>("");

  const setValue = useCallback(
    (e: { target: { value: React.SetStateAction<string> } }) => {
      setValueState(e.target.value);
    },
    []
  );

  return [value, setValue];
};

export default useValue;
