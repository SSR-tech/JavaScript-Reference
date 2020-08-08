// 01 - Call Method

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
