function logTime(message) {
    const time = new Date().toLocaleTimeString();
    console.log(`[${time}] ${message}`);
}

function asyncStep(name, delay, callback) {
    logTime(`${name} started (will take ${delay}ms)`);

    setTimeout(() => {
        logTime(`${name} completed`);
        callback();
    }, delay);
}

logTime("Program started");

asyncStep("Step 1", 2000, function() {
    asyncStep("Step 2", 1000, function() {
        asyncStep("Step 3", 500, function() {
            logTime("All steps finished");
        });
    });
});

logTime("Program finished (but async still running)");
