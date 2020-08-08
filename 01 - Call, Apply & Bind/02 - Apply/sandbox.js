// 02 - Apply Method

let name = {
  firstName: "SAI SHRI RAM",
  lastName: "SA",
};

let printFullName = function (hometown, state) {
  console.log(`${this.firstName} ${this.lastName} is from ${hometown}, ${state}`);
};

printFullName.call(name, "Karur", "Tamil Nadu");

let name2 = {
  firstName: "SSR",
  lastName: "SA",
};

// Call() Method -> Function Borrowing
printFullName.call(name2, "Chennai", "Tamil Nadu");

/* Apply() Method -> Instead of passing the arguments individually
like in the call method, we pass the arguments in a list */
printFullName.apply(name2, ["Chennai", "Tamil Nadu"]);
