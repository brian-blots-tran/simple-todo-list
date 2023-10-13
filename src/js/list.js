import createTask from "./task.js";

const createList = (name) => {
  let listName = name;
  let taskList = [];
  let tasklistIndex = 0;
  const addTask = (name, description, dateToComplete) => {
    taskList.push(createTask(tasklistIndex, name, description, dateToComplete));
    console.log(taskList);
    tasklistIndex++;
  };

  const removeTask = (id) => {
    taskList = taskList.filter((task) => {
      console.log(
        `removing task: ${taskList.findIndex((task) => {
          task.getId();
        })}`
      );
      task.getId() !== id;
    });
  };
  const getName = () => listName;
  const getTaskList = () => taskList;
  const isEmpty = () => taskList.length === 0;

  return { addTask, removeTask, getName, getTaskList, isEmpty };
};

export default createList;
