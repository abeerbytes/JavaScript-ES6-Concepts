console.log("Task 4.3  Promises vs Callbacks");

function log(message, level) {
  console.log(
    "Level:", level,
    "| Time:", new Date().toLocaleTimeString(),
    "|", message
  );
}

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Abeer");
    }, 1000);
  });
}

function fetchOrders(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Laptop", "Mouse"]);
    }, 1000);
  });
}

function processPayment(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Payment Successful");
    }, 1000);
  });
}

function sendEmail(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Email sent to " + user);
    }, 1000);
  });
}


fetchUser()
  .then((user) => {
    log("User fetched: " + user, 1);
    return fetchOrders(user);
  })
  .then((orders) => {
    log("Orders fetched: " + orders.join(", "), 2);
    return processPayment("Abeer");
  })
  .then((paymentStatus) => {
    log("Payment status: " + paymentStatus, 3);
    return sendEmail("Abeer");
  })
  .then((emailStatus) => {
    log(emailStatus, 4);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
