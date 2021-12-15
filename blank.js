var input = "This website is for losers LOL"

const vowels = ["a", 'e', 'i', 'o', 'u']
if (vowels.includes('e')){
  console.log("It has an e");
} else {
  console.log("error");
}


function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'u', 'o']
  let deVoweled = []
  for (i = 0; i < str.length; i++){
    if (!vowels.includes(str[i].toLowerCase())){
      deVoweled.push(str[i])
    }
  }
  return deVoweled.join("")
}

console.log(disemvowel(input));



const vowelTester = (string) => {
  return string.search(/[aeiou]/i)
}
//using .search to search for any of the following characters, at a global scale, ie through the entire string, and i is for case insensitive matches
//g is not applicable in this instance

console.log(vowelTester("Learn Academy"));
console.log(vowelTester("incubate"));
console.log(vowelTester("GRAVITAS"))
console.log(vowelTester("JFDKLAHE"))
console.log(vowelTester("jkljklghjklgh"))



const firstUpper = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]


const capFirst = (array) => {
  return array.map(firstUpper)
}

const refactor = (array) => {
  return array.map((value) => value[0].toUpperCase() + value.slice(1))
}

console.log(refactor(randomNouns2))

console.log(randomNouns2[0].search(/e/g));

// create an array of possible words
const possibleWords = ["vegan", "singer", "manager", "program", "productive", "relevant", "elephant", "believe"]
// get a random word from the array of possible words
const hangmansWord = possibleWords[Math.floor(Math.random() * possibleWords.length)]
console.log(hangmansWord);
// takes a given letter and finds all instances of it in the selected string
const containsAt = (string) => {
  //declare a variable to store the locations of the matching letters
  let isAt = []
  // use a for loop combined with indexOfto find the indices of all instances of the given letter
  for (let i = 0; i < hangmansWord.length; i++) {
    if (string.toLowerCase() === hangmansWord[i]) isAt.push(i)
  }
  return isAt
}
console.log(containsAt("e"));

// create an array that contains " " for each letter in the hangmans word
const placeHolder = []
for (let i = 0; i < hangmansWord.length; i++) {
  placeHolder.push(" ")  
}
console.log(placeHolder);

// replace the " " in the placeholder array with the letters that are properly guessed at the proper location
