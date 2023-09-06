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

    // Group tasks by date
    const groupedTasks = {};
    for (const item of list) {
      if (!groupedTasks[item.dueDate]) {
        groupedTasks[item.dueDate] = [];
      }
      groupedTasks[item.dueDate].push(item);
    }

    // Display tasks by group
    for (const dueDate in groupedTasks) {
      if (output !== "") {
        output += "\n";
      }
      output += `${dueDate === today ? "Due Today" : dueDate === new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split("T")[0] ? "Due Later" : "Overdue"}\n`;
      for (const item of groupedTasks[dueDate]) {
        const checkbox = item.completed ? "[x]" : "[ ]";
        output += `${checkbox} ${item.title} ${dueDate !== today ? item.dueDate : ""}\n`;
      }
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

var displayableList = todos.toDisplayableList(todos.all);
console.log(displayableList);
