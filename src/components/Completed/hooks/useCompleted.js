import { toJS } from 'mobx';
import { useEffect, useState } from 'react';
export const useCompleted = ({ tasksList }) => {
  const [tasksData, setData] = useState([]);
  useEffect(() => {
    setData(toJS(tasksList));
  }, []);

  return {
    tasksData,
  };
};
