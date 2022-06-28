import { makeAutoObservable } from 'mobx';

class TodoToggle {
  simpleToggle = false;

  constructor() {
    makeAutoObservable(this);
  }

  doToggle() {
    this.simpleToggle = !this.simpleToggle;
  }
}

export default new TodoToggle();
