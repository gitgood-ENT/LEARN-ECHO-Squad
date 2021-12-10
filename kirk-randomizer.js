// Randomizes checkin/checkout roster and accounting for instructors and previously late students

var instructor = ["Austin", "Sarah"]; // does not randomize instructors
var late = []; // add previously late student(s) to be "randomly" chosen to go first, verify spelling is consistent

// student names in no particular order

var cohortStudents = [
  "John",
  "Gluay",
  "Antonio",
  "Kevin",
  "Demetrius",
  "Joshua",
  "Mikka",
  "Francisco",
  "Jason",
  "Samantha",
  "Noah",
  "Raul",
  "Salvador",
  "Yann",
  "Christopher",
  "Warren",
  "Hannah",
  "Deon",
  "Kirk",
  "Pavan",
  "Robert",
  "Regina",
];


// randomizes cohortStudents array
// const randomizeArray = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     let student = array[i];
//     let randomIndex = Math.floor(Math.random() * array.length);
//     array[i] = array[randomIndex];
//     array[randomIndex] = student;
//   }
//   return array;
// };

// // takes names in late array and removes them from cohortStudents array
// const lateStudent = (lateStudentArray) => {
//   for (let i = 0; i < lateStudentArray.length; i++) {
//     var index = cohortStudents.indexOf(lateStudentArray[i]);
//     cohortStudents.splice(index, 1);
//   }
//   return lateStudentArray;
// };

// // concatenates but keeps late students first and instructors last
// var checkIn = lateStudent(late).concat(
//   randomizeArray(cohortStudents).concat(instructor)
// );

// logs to console for easy copy and paste
// for (let i = 0; i < checkIn.length; i++) {
//   console.log(checkIn[i]);
// }



//console.log(cohortStudents)

// const randomOrder = []
// console.log(cohortStudents.length)
// while (cohortStudents.length > 0) {
//     let pick = Math.floor(Math.random() * cohortStudents.length)
//     //console.log(pick)
//     randomOrder.push(cohortStudents[pick]);
//     cohortStudents.slice(pick, pick);
    
// }
// console.log(randomOrder)





// console.log(cohortStudents.length)
// var numStud = cohortStudents.length;
// for (let i = 0; i <= numStud; i++) {
//     let numStud = cohortStudents.length
//     console.log(numStud)
//     let pick = Math.floor(Math.random() * numStud)
//     console.log(pick + "pick")
//  //   randomOrder.push(cohortStudents[pick]);
    
//     cohortStudents.splice[pick, 1]
    
// }
// console.log(randomOrder)





// //create a new array for the day
// const randomOrder = []
// //use a while loop to iterate through the list of students and remove them from it and add them to the new array
// while (cohortStudents.length >= 0 && instructor.length > 0) {

//   //Declare a var and then use that each time for the random is used
//   let pick = Math.floor(Math.random() * cohortStudents.length)
//   console.log(pick);
//   //compare to see if selected student is on the list of late students and then use unshift to add late student to the front of the list for the day
//   if (cohortStudents.length > 0) {
//     //Get a random person from the list 
//     for ( let i = 0; i <= late.length; i++)
//     //this needs be added into an if statement to compare against late list
//       if (cohortStudents[pick] === late[i]) {
//         //add late student to the front of the list   - - - - - - -> Adding a late person broke the code soooo here we go.
//         randomOrder.unshift(cohortStudents[pick])
//         cohortStudents.splice(pick, 1)
//       } else {
//       //both add them to new array and remove them from the old list
//       randomOrder.push(cohortStudents[pick]);
//       cohortStudents.splice(pick, 1)
//       }
//     //splice the old array to remove the selected student from cohortStudents
    
//     }
//   //when all students have been added, add instructors to the end of the array in a random order using the same method as above, which I could use a function for since I am reusing it, geez.
//     if (cohortStudents.length === 0 && instructor.length > 0) {
//       let pickInst = Math.floor(Math.random() * instructor.length)
//       randomOrder.push(instructor[pickInst])
//       instructor.splice(pickInst, 1)
//       console.log(instructor.length)
//     }
// }

// console.log(randomOrder)




// //Make a function to randomize an array by getting a random index and removing the item at that index and then putting it into a new array
// //Declare function and it input
// const randomizeArray = (array) => {
//   console.log(array.length);
//   //Declare the new array to be used
//   let randomOrderTakeTwo = []
//   //Use a while loop to iterate through the items in the input array while the input array still has items in it
//   while (array.length > 0) {
//     let picked = Math.floor(Math.random() * array.length)
//       //use Math.random to select a random index and add it to the new array, then remove it from the input array
//       //To have an output, it needs to have an array that has been declared to write the new items to
//     randomOrderTakeTwo.push(array[picked])
//     array.splice(picked, 1)
//     console.log(array.length)
//   }
// }
// randomizeArray(cohortStudents)

// var rando = []
// var lates = []
// var latePeeps = late.length
// while (cohortStudents.length >= 0 && instructor.length > 0) {
//   let pick = Math.floor(Math.random() * cohortStudents.length)
//   if (latePeeps > 0) {
//     for (let i = latePeeps; i > 0; i--) {
//       lates.push(cohortStudents.indexOf(late[0]))
//       cohortStudents.splice(cohortStudents.indexOf(late[0]), 1)
//       late = late.splice[0, 1]
//     }
//   } else {
//     rando.push(cohortStudents[pick])
//     cohortStudents.splice(pick, 1)
//   }
//   if (cohortStudents.length === 0 && instructor.length > 0) {
//     let pickInst = Math.floor(Math.random() * instructor.length)
//     rando.push(instructor[pickInst])
//     instructor.splice(pickInst, 1)
//   } else {
//     console.log(cohortStudents.length);
//     console.log(instructor.length);
//     console.log(lates.concat(rando));
//   }
// }