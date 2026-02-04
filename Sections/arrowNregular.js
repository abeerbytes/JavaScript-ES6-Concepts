const user = {
  name: "Abeer",

// regular function
  regularFunction: function () {
    console.log("Regular Function this.name:", this.name);
    console.log("Regular Function this:", this);
  },

  // Arrow function
  arrowFunction: () => {
    console.log("Arrow Function this.name:", this.name);
    console.log("Arrow Function this:", this);
  }
};

// Call both methods
user.regularFunction();
user.arrowFunction();
