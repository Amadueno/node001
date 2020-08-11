// let pets = require('./pets')
// let dog = pets[0]
// let cat = pets[1]
// console.log(dog, cat)
// 
let operator = process.argv[2]
let firstNum = parseInt(process.argv[3])
let secondNum = parseInt(process.argv[4])

switch (operator) {

    case 'add':
        console.log(firstNum + secondNum)
        break
    case 'subtract':
        console.log(firstNum - secondNum)
        break
    case 'multiply':
        console.log(firstNum * secondNum) 
        break
    case 'divide':
        console.log(firstNum / secondNum)
        break           



}