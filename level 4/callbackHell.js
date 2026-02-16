console.log("Task 4.2  Callback Hell Simulation");

function log(message, level) {
  console.log(
    "Level:", level,
    "| Time:", new Date().toLocaleTimeString(),
    "|", message
  );
}


setTimeout(() => {
  const user = "Abeer";
  log("User fetched: " + user, 1);

  setTimeout(() => {
    const orders = ["Laptop", "Mouse"];
    log("Orders fetched for " + user + ": " + orders.join(", "), 2);

  
    setTimeout(() => {
      const paymentStatus = "Payment Successful";
      log("Payment status for " + user + ": " + paymentStatus, 3);

      setTimeout(() => {
        log("Email sent to " + user, 4);
      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);
