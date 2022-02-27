import { useState, useCallback } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback(
    (event) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  return { value, handleChange, setValue };
};

export default useInput;
