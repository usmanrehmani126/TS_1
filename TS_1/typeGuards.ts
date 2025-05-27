const callFunction = (arg: string | number) => {
  // arg. if we use this then it will throw an error because we don't know if the arg is a string or a number
  // so we need to use type guards to check if the arg is a string or a number
  if (typeof arg === "string") {
    return arg.toUpperCase();
  } else if (typeof arg === "number") {
    return arg;
  } else {
    throw new Error("Invalid argument");
  }
};

console.log(callFunction("Usman"));
console.log(callFunction(1));
console.log(callFunction(true));
