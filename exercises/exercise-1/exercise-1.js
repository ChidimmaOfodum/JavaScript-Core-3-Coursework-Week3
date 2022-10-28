const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};


function introduceYourself(obj) {
  let { name, age, favouriteFood } = obj;
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);


// hat is the syntax to destructure the object `personOne` in exercise-1.js?
// - Update the argument of the function `introduceYourself` to use destructuring on the object that gets passed in.
