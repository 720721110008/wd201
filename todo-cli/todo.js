const todoList = () => {
  const all = [];

  const add = (todoItem) => {
    all.push(todoItem);
  };

  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter(
      (item) => item.dueDate < today && !item.completed
    );
  };

  const dueToday = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter(
      (item) => item.dueDate === today && !item.completed
    );
  };

  const dueLater = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter(
      (item) => item.dueDate > today && !item.completed
    );
  };

  const toDisplayableList = (list) => {
    let output = "";
    for (const item of list) {
      output += `[${item.completed ? "x" : " "}] ${item.title} ${
        item.dueDate === new Date().toISOString().split("T")[0]
          ? ""
          : item.dueDate
      }\n`;
    }
    return output;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

todos.add({
  title: 'Submit assignment',
  dueDate: '2023-09-05',
  completed: false
});
todos.add({
  title: 'Pay rent',
  dueDate: today,
  completed: true
});
todos.add({
  title: 'Service Vehicle',
  dueDate: today,
  completed: false
});
todos.add({
  title: 'File taxes',
  dueDate: '2023-09-07',
  completed: false
});
todos.add({
  title: 'Pay electric bill',
  dueDate: '2023-09-07',
  completed: false
});

console.log("My Todo-list\n");

console.log("Overdue");
var overdues = todos.overdue();
var formattedOverdues = todos.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log("\n");

console.log("Due Today");
let itemsDueToday = todos.dueToday();
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n");

console.log("Due Later");
let itemsDueLater = todos.dueLater();
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");