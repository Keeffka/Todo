//Ok

export const getDataFromStorage = name => {
  return localStorage.getItem(name);
};

//Ok

export const setDataToStorage = (name, value) => {
  localStorage.setItem(name, value);
};

//Ok

export const updateDataInStorage = (name, obj) => {
  if (getDataFromStorage(name)) {
    const prevData = JSON.parse(getDataFromStorage(name));
    setDataToStorage(name, JSON.stringify([...prevData, obj]));
    return;
  }
  setDataToStorage(name, JSON.stringify([obj]));
};

export const removeTaskFromStorage = (name, obj) => {
  const prevData = getDataFromStorage(name);
  const newData = JSON.parse(prevData).filter(task => task.id !== obj.id);

  setDataToStorage(name, JSON.stringify(newData));
  updateDataInStorage('completedTasks', obj); // Very bad
};

//OK

export const getId = obj => {
  const time = obj.timeValue;
  const timerTime = time
    .split('')
    .filter(symb => symb !== ':')
    .join('')
    .trim();
  const id = obj.titleValue.replace(/ /g, '') + obj.selectValue + timerTime;

  return id;
};

export const removeElement = (obj, name) => {
  obj.id = getId(obj); //Bad
  const prevData = getDataFromStorage(name);
  const newData = JSON.parse(prevData).filter(task => task.id !== obj.id);

  setDataToStorage(name, JSON.stringify(newData));
};
