// 03 - Bind Method

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

/* Bind() Method -> Looks exactly same as the call method, 
but the only difference is, instead of calling the method
directly, the bind method binds the method printFullName with
the object and returns the copy of the method.*/
let printMyName = printFullName.bind(name2, "Chennai", "Tamil Nadu");
console.log(printMyName);
printMyName();

/* Bind() method is used to when we want to store a function in a variable and call
it when we need it. */
