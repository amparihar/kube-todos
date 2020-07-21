import { useState, useCallback } from "react";

const useFormState = (initialState) => {
  const [formState, setFormState] = useState({ ...initialState });

  const setState = useCallback((e) => {
    const { name, value, checked, type } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const resetState = useCallback(() => {
    setFormState((prev) => ({ ...prev, ...initialState }));
  }, [initialState]);

  // TO DO : Return an array , so that the ites can be destructured by index and not by name
  return {
    formState,
    setState,
    resetState,
  };
};

export default useFormState;
