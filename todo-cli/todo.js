 const todoList = () => {
   all = []

  const add = (todoItem) => {
    all.push(todoItem)
  }

  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    const currentDate = new Date()
    return all.filter(item => !item.completed && new Date(item.dueDate) < currentDate)
  }

  const dueToday = () => {
    const currentDate = new Date()
    return all.filter(item => !item.completed && new Date(item.dueDate).toDateString() === currentDate.toDateString())
  }

  const dueLater = () => {
    const currentDate = new Date()
    return all.filter(item => !item.completed && new Date(item.dueDate) > currentDate)
  }

  const toDisplayableList = (list) => {
    let output = '';
    list.forEach(item => {
      output += `[${item.completed ? 'x' : ' '}] `;
      output += item.title;
      if (new Date(item.dueDate).toDateString() !== currentDate.toDateString()) {
        output += ` ${formattedDate(new Date(item.dueDate))}`;
      }
      output += '\n';
    })
    return output;
  }

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  }
}


// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
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

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false });
todos.add({ title: 'Pay rent', dueDate: today, completed: true });
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false });
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false });
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false });

const overdueList = todos.overdue();
const formattedOverdues = todos.toDisplayableList(overdueList);
console.log("My Todo-list\n");
console.log("Overdue");
console.log(formattedOverdues);
console.log("\n");

const todayList = todos.dueToday();
const formattedItemsDueToday = todos.toDisplayableList(todayList);
console.log("Due Today");
console.log(formattedItemsDueToday);
console.log("\n");

const laterList = todos.dueLater();
const formattedItemsDueLater = todos.toDisplayableList(laterList);
console.log("Due Later");
console.log(formattedItemsDueLater);
console.log("\n\n");