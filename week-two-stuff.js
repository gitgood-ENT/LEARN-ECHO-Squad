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

