import { useEffect, useState } from 'react';
import { getDataFromStorage } from '../../../utils';

export const useStorage = (todoToggle, listOfCompletedTasks) => {
  const [data, setData] = useState([]);
  const { simpleToggle } = todoToggle;

  useEffect(() => {
    const storageData = getDataFromStorage('todoData');
    listOfCompletedTasks.refresh();
    setData(JSON.parse(storageData));
  }, [simpleToggle]);

  return {
    data,
  };
};
