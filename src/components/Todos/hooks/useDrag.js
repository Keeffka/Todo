import { removeElement } from '../../../utils';

export const useDrag = (obj, setDone) => {
  const onDragHandler = (event, info) => {
    if (info.offset.x < -350) {
      setDone(true);
      removeElement(obj, 'todoData');
    }
  };

  return {
    onDragHandler,
  };
};
