import { useCallback, useState } from 'react';

export const useInput = () => {
  const [value, setValue] = useState('');

  const formHandler = useCallback(
    event => {
      setValue(event.target.value);
    },
    [value]
  );

  return {
    value,
    formHandler,
  };
};
