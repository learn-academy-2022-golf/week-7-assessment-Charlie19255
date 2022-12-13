// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("taker", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
  
  const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
  ]
  expectedOutput= ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

  expect(taker(people)).toEqual(expectedOutput)
  })
})

//ReferenceError: taker is not defined

// b) Create the function that makes the test pass.



// const taker=(array)=>{
//   return array.map((value)=>{"${Object.value[0]} is a ${Object.value[1]}"})
// }
// - Expected  - 3
// + Received  + 3

// Array [
// -   "Ford Prefect is a hitchhiker.",
// -   "Zaphod Beeblebrox is president of the galaxy.",
// -   "Arthur Dent is a radio employee.",
// +   undefined,
// +   undefined,
// +   undefined,
// ]

// const taker=(array)=>{
//   return array.map((value)=>{"${Object.values(value)}"})
// }
// - Expected  - 3
// + Received  + 3

// const taker=(array)=>{
//   return array.map((value)=>{Object.values(value)})
// }
// - Expected  - 3
// + Received  + 3

// const taker=(array)=>{
//  return array.map(value)=>{(value)})}
//  - Expected  - 3
//  + Received  + 3

// const taker=(array)=>{
//   return `${array[0].name} is a ${array[0].occupation}`}
//   - Expected  - 3
//   + Received  + 3

// const taker=(array)=>{
// return array.map((value)=>{`${Object.values[value][0]} is a ${Object.values[value][1]}`})}
// - Expected  - 3
// + Received  + 3

// const taker=(array)=>{
//   return (`${array[0].name} is ${array[0].occupation}`)}
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// const taker=(array)=>{
// let obj = Object.values(array)
// let newObj =[]
// for(let i=0;i<obj.length;i++){
// newObj.push(`${obj[i].name.slice(0,1).toUpperCase()+obj[i].name.slice(1,obj[i].name.length)
// } is ${obj[i].occupation}`)}
// return newObj
// }

//create a function called taker
  //function will take in the parameter of an array
    //The function will access the value of each key value pair within the object ny the variable obj.
    //we will be able to access the values of obj using dot notation.
    //create a new variable of newObj with an empty array to push strings into
      //create a for loop to run through each index of the obj variable
      //in the for loop create a new variable called newStr
        //newStr will take in the obj at an index and the name using dot notation
          //newStr will make the name into an array and capitalize the starting letter of the string using built methods map, to uppercase, split, substring, lowercase and join
    //the function will string interpolate the newStr variable and obj at an index and dot notation to create a string
    //moving the string interpolation into the newObj using built in method push
  //The function will return newObj with all the strings in an array
//verify with yarn jest

// const taker=(array)=>{
//   let obj = Object.values(array)
//   let newObj =[]
//   for(let i=0;i<obj.length;i++){
//     const newStr = obj[i].name.split(' ').map(value=>value[0].toUpperCase()+value.substring(1).toLowerCase()).join(' ')
//   newObj.push(`${newStr} is ${obj[i].occupation}.`)}
//   return newObj
//   }

//   Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

const taker=(array)=>{
  let newObj =[]
  for(let i=0;i<Object.values(array).length;i++){
  newObj.push(`${Object.values(array)[i].name.split(' ').map(value=>value[0].toUpperCase()+value.substring(1)).join(' ')} is ${Object.values(array)[i].occupation}.`)}
  return newObj
  }
  //refactored by removing the variable obj and lowercase function. removed newStr and inputed function into push argument.
  // Test Suites: 1 passed, 1 total
  // Tests:       3 passed, 3 total

    // const taker=(array)=>{
    //   let newObj =[]
    //    for(let i=0;i<Object.values(array).length;i++){
    //      newObj.push(`${ Object.values(array)[i].name.replace(
    //      /\w\S*/g,
    //      function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()})} is ${Object.values(array)[i].occupation}.`
    //      )
    //    }
    //   return newObj
    // }
    // Test Suites: 1 passed, 1 total
    // Tests:       3 passed, 3 total
    //tested regex to see if less code. About the same but more complicated.



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("divider", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
const expectedOutput1 = [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
const expectedOutput2 = [ 2, 1, -1 ]
expect(divider(hodgepodge1)).toEqual(expectedOutput1)
expect(divider(hodgepodge2)).toEqual(expectedOutput2)
})
})
// ReferenceError: divider is not defined

// b) Create the function that makes the test pass.


//create a function called divider
  // the function will take in the parameter of array
  //the function will keep only the numbers by using the built in methods of typeof and filter
  // a variable called numArray will be made to keep only numbers
  // using built methods map and modelo the function will divide each number by three and keep the remainders in the array
  //the function will return the remainders in an array
//run yarn jest to verify

// const divider=(array)=>{
// return array.filter(value=> typeof value==='number')
// }
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total

// const divider=(array)=>{
//   numArray = array.filter(value=> typeof value==='number')
//   return numArray.map(value=> value % 3)
//   }
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

  const divider=(array)=>{
    return (array.filter(value=> typeof value==='number')).map(value=> value % 3)
    }
//refactored to remove variable and shorten code
  // Test Suites: 1 passed, 1 total
  // Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("cubeSum", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
const cubeAndSum1 = [2, 3, 4]
//Expected output: 99
const cubeAndSum2 = [0, 5, 10]
//Expected output: 1125
expect(cubeSum(cubeAndSum1)).toEqual(99)
expect(cubeSum(cubeAndSum2)).toEqual(1125)
})
})
// ReferenceError: cubeSum is not defined

// b) Create the function that makes the test pass.

//create a function called cubeSum
  //the function will take in the parameter array
  // it will take the array and will cube each number with the map built in method
  //it will take the new array of cubed numbers and use the built in method reduce
    // the reduce method will add all the numbers in order and accumulate the sum until no numbers are left
  //the function will return a sum of the cubed numbers
//run yarn jest

// const cubeSum =(array)=>{
//  return array.map(value=>{value**3})
// } 
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

const cubeSum =(array)=>{
 return (array.map(value=>value ** 3)).reduce((sum,num) => sum + num)
 } 
//  Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total