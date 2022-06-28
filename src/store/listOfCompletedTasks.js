import { observable } from 'mobx';
import { getDataFromStorage } from '../utils';

const listOfCompletedTasks = observable({
  tasksList: observable.array([
    ...(JSON.parse(getDataFromStorage('completedTasks')) || []),
  ]),

  refresh() {
    this.tasksList = [
      ...(JSON.parse(getDataFromStorage('completedTasks')) || []),
    ];
  },
});

export default listOfCompletedTasks;
