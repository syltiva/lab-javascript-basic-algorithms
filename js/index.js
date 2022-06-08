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