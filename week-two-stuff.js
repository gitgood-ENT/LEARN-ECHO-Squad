const everyOther = (string) => {
  let capped = []
  var letter = 0
  for (let index = 0; index < string.length; index++) {
    let otherEvery = string[index];
    if (otherEvery !== " "){
      if (letter % 2 === 0) {
      capped.push(otherEvery.toUpperCase())
      letter++
      } else {capped.push(otherEvery)
      letter++
      }
    } else {
      capped.push(otherEvery)
    }
  }
  return capped.join("")
}
//current problem is that if anything other than a space is input in the string then it is counted as a letter, like a comma or a question mark



console.log(everyOther("hello world"))
console.log(everyOther("oh hello there how are you doing"));

const timesTen = (num) => {
  return num * 10
}
var randNums = [3, 56, 6, 34, 7, 8, 32, 34, 65]

console.log(randNums.map(timesTen))

//try to duplicate an array by setting a new array equal to an array that aklready exists
//trying to figure out why you would use the spread operator instead of doing this
const copyRandNums = randNums
console.log(copyRandNums + "tried to copy an array");
copyRandNums.push(1111)
console.log(randNums);
//Apparently I didn;t actually copy the OG array but merely created a reference to it and then appended it via the refernce, so using spread would actually copy the array into a new variable instead of what it did.

//array of words that takes in an array and returns an array with the words in uppercase

var words = ["you", "shouldn't", "eat", "chicken", "or", "beef", "or", "really", "any", "meat", "or", "animal", "product", "because", "of", "animal", "cruelty"]

//input will be an input array
//output will be the input array but with the words in capital letters
//use the map function to iterate over every item in the input array and assign them to a new array
//return array.map(function name)


const upperCase = (string) => {
  return string.toUpperCase()
}

const wordsUpper = words.map(upperCase)
console.log(wordsUpper);



//Kirk's run at returning the pet's name for if they are over 10 years old.

// let pets = [
//   { name: "Sheldon", type: "dog", age: 4 },
//   { name: "Yuki", type: "cat", age: 17 },
//   { name: "Eddie", type: "dog", age: 13 },
//   { name: "Zoey", type: "dog", age: 2 },
//   { name: "Artemis", type: "cat", age: 7 },
// ];

// const longTimeFriendsFilter = (array) => {
//   return array.filter((value) => (value.age >= 10 ? value.name : null));
// };
// console.log(longTimeFriendsFilter(pets));
// //-> [{ name: 'Yuki', type: 'cat', age: 17 }, { name: 'Eddie', type: 'dog', age: 13 }]

// const longTimeFriendsFilter2 = (array) => {
//   return array.filter((value) => {
//     if (value.age >= 10) {
//       return value.name;
//     }
//   });
// };
// console.log(longTimeFriendsFilter2(pets));
// //-> [{ name: 'Yuki', type: 'cat', age: 17 }, { name: 'Eddie', type: 'dog', age: 13 }]

// const longTimeFriendsForEach = (array) => {
//   let oldPetNames = [];
//   array.forEach((value) => {
//     value.age >= 10 ? oldPetNames.push(value.name) : null;
//   });
//   return oldPetNames;
// };
// console.log(longTimeFriendsForEach(pets));
// //-> ['Yuki', 'Eddie']


// Create a function that returns a new array with only the names of the animals.

var animals = [
  { name: "Waffles", type: "dog", age: 12 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 },
]

console.log(animals[0].name);
var nameArr = []
const nameAdd = (array) => {
  for (let i = 0; i < array.length; i++) {
    nameArr.push(array[i].name)
  }
  return nameArr
}
console.log(nameAdd(animals));

const cats = (array) => {
  return array.filter((value) => (value.type === "cat"));
};


const AnimalNames = (array) => {

}

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

const firstUpper = (string) => {
    //Return the lettter at index(0) capitalized and the rest of the string concatenated
    return string.charAt(0).toUpperCase() + string.slice(1)
}
//Got Green

// declare the function capFirst that capitalizes the first letter of each string in an array
const capFirst = (array) => {
    array.map(firstUpper)
}
console.log(capFirst(randomNouns1));
