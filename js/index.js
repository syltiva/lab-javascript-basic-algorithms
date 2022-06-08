// Iteration 1: Names and Input
const hacker1 = "Sylvia"
console.log("The driver's name is ", hacker1)
const hacker2 = "Jack"
console.log("The navigator's name is ", hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
const nameArr = [hacker1, hacker2]
// nameArr.push(hacker1, hacker2)
nameArr.sort()
console.log(nameArr)
if (nameArr[0] === nameArr[1]) {
console.log("What?! You both have the same name?")
} else if (nameArr === hacker1) {
console.log("The driver's name goes first.")
} else {
  console.log("Yo, the navigator goes first definitely.")
} 

// Bonus 1
const loremStr = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const splitLorem = loremStr.split(" ")
console.log(splitLorem)
console.log(splitLorem.length)

// Bonus 2
// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

const phraseToCheck = "Was it a car or a cat I saw?"

function checkPalindrome(string) {
  const editedStr = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
  console.log("editedStr", editedStr)
  const reversedStr = editedStr.split("").reverse().join("")
  console.log("reversedStr", reversedStr)
  if (editedStr === reversedStr) {
    console.log("Palindrome")
  } else {
    console.log("Not a Palindrome")
  }
    
}

checkPalindrome(phraseToCheck)