import { useState, useEffect } from 'react';
import { getId, removeTaskFromStorage } from '../../../utils';

export const useTodo = (controllers, setDone, listOfCompletedTasks) => {
  const [dividerController, textController] = controllers;
  const [isClicked, setClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      dividerController.start({
        y: -20,
        opacity: 0.4,
        transition: {
          duration: 0.4,
        },
      });
      textController.start({
        opacity: 0.2,
        transition: {
          duration: 0.4,
        },
      });
    }
  }, [isClicked]);

  const removeTask = obj => {
    setDone(true);
    obj.id = getId(obj);
    removeTaskFromStorage('todoData', obj);
    listOfCompletedTasks.refresh();
  };

  return {
    setClicked,
    isClicked,
    removeTask,
  };
};
