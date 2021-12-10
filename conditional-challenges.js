// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

var item = Math.random() * 200
if (item <= 100) {
  console.log("In Budget");
} else {
  console.log("Above Budget");
}


// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

var hungry = Math.random()
if (hungry >=  0.5) {
  console.log("eat food");
} else {
  console.log("keep coding");
}


// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

let colors = ["green", "red", "yellow"]
var trafficLight = colors[Math.floor(Math.random() * colors.length)]
if (trafficLight === "green") {
  console.log("go");
} else if (trafficLight === "red") {
  console.log("stop");
} else if (trafficLight === "yellow") {
  console.log("slow down");
}

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

var firstNum = Math.floor(Math.random() * 100)
var secondNum = Math.floor(Math.random() * 100)
if (firstNum > secondNum) {
  console.log(firstNum);
} else if (firstNum < secondNum) {
  console.log(secondNum);
} else if (firstNum == secondNum) {
  console.log(`Both numbers are ${firstNum}`);
} else {
  console.log("error");
}


//
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

var thirdNum = Math.floor(Math.random() * 100)
if (thirdNum === 0) {
  console.log("It's zero");
} else if (thirdNum % 2 === 0) {
  console.log(thirdNum + " is even");
} else if (thirdNum % 2 === 1) {
  console.log(thirdNum + " is odd");
} else {
  console.log('Is it even a number?');
}


//
// STRETCH Challenges
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

var grade = Math.floor(Math.random() * 101)
if (grade === 100) {
  console.log("perfect score");
} else if (grade >= 90) {
  console.log(`You got ${grade}% and an A!`);
} else if (grade >= 80) {
  console.log(`You got ${grade}% and a B`);
} else if (grade >= 70) {
  console.log(`You got ${grade}% and a C`);
} else if (grade >= 67) {
  console.log(`You got ${grade}% and a D`);
} else if (grade === 0) {
  console.log("No grade available");
} else {
  console.log(`You got a ${grade}% and are going to have to retake the course. 😥`);
}



// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.





// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

var passWord = "fndjksaao!fdsak"
if (passWord.includes("!") && passWord.length >= 12) {
  console.log("That is a mighty strong password!");
} else if (passWord.includes("!") || passWord.length >= 8) {
  console.log("That password is strong enough");
} else {
  console.log("That is not a valid password");
}
