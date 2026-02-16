
function log(message) {
    const time = new Date().toLocaleTimeString();
    console.log(`[${time}] ${message}`);
}

class TaskRunner {
    constructor(config = { autoRun: false, delay: 1000 }) {
        this.tasks = new Map(); 
        this.config = config;   
    }


    addTask(name, taskFn) {
        this.tasks.set(name, taskFn);
        log(`Task "${name}" added`);
        if (this.config.autoRun) this.runTask(name);
    }

x
    runTask(name, callback = () => {}) {
        const taskFn = this.tasks.get(name);
        if (!taskFn) {
            log(`Task "${name}" not found`);
            return;
        }
        log(`Starting task "${name}"`);
        setTimeout(() => {
            taskFn();
            log(`Completed task "${name}"`);
            callback();
        }, this.config.delay);
    }

    runAllTasks() {
        const taskNames = Array.from(this.tasks.keys());
        const runNext = (index) => {
            if (index >= taskNames.length) return;
            this.runTask(taskNames[index], () => runNext(index + 1));
        };
        runNext(0);
    }
}


const taskA = () => log("Task A: Fetching data...");
const taskB = () => log("Task B: Processing data...");
const taskC = () => log("Task C: Saving results...");

const runner = new TaskRunner({ autoRun: false, delay: 1000 });

runner.addTask("FetchData", taskA);
runner.addTask("ProcessData", taskB);
runner.addTask("SaveResults", taskC);

runner.runAllTasks()
