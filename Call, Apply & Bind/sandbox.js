let name = {
  firstName: "SAI SHRI RAM",
  lastName: "SA",
  printFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
name.printFullName();

let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

// Call() Method -> Function Borrowing
name.printFullName.call(name2);