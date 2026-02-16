console.log("Asynchronous Task Manager App");


class TaskManager {
  constructor(managerName) {
    this.managerName = managerName;

    const tasks = [];

    this.addTask = function (taskName, delay = 1000) {
      tasks.push({ name: taskName, delay });
      console.log(`Task added: ${taskName}`);
    };


    this.runTasks = function () {
      console.log(`\n${this.managerName} starting task execution...\n`);

      tasks.forEach((task, index) => {
        setTimeout(
          function () {
            console.log(
              `Task #${index + 1}: ${task.name} executed by ${this.managerName}`
            );
          }.bind(this), 
          task.delay
        );
      });
    };

    this.getTaskCount = function() {
      console.log(`Total tasks: ${tasks.length}`);
    };
  }
}

const myTasks = new TaskManager("Abeer");


myTasks.addTask("Fetch user data", 1000);
myTasks.addTask("Process orders", 2000);
myTasks.addTask("Send notification", 1500);
myTasks.addTask("Backup database", 2500);


console.log("\nRuntime Observations:");
myTasks.getTaskCount();
console.log("Tasks are stored privately using closure.");
console.log("Context of 'this' is controlled using bind for async execution.\n");


myTasks.runTasks();
