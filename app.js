// Дано масив з елементами різних типів. 
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.


const randomElements = [10, 45, 5, 'hello', 5, 'puppy', "cat", 6, 'he', 1, 6, 12, 'rabbit', 11];

// function addElementInArray(){
//     let userInput;
//     while (true){
//         userInput = prompt("Enter an element of the array");
//         if(userInput === null){
//             break;
//         }
//         randomElements.push(userInput);
//     }
// }
// addElementInArray();

function showArray(){
    console.log(`Original array: ${randomElements.join(', ')}`);
}

function findNumbers(){
    let arrayOfNumbers = [];
    for(let i = 0; i < randomElements.length; i++){
        if (typeof randomElements[i] === 'number'){
            arrayOfNumbers.push(randomElements[i]);
        }
    }
    console.log(`Array of numbers: ${arrayOfNumbers.join(', ')}`);

    return arrayOfNumbers;
}

function arithmeticMean(){
    const numbers = findNumbers();
    let sum = 0, arMean= 0;
    for(let i = 0; i < numbers.length; i++){
        sum+=numbers[i];
    }
    arMean = sum/numbers.length;
    console.log(`Arithmetic mean: ${parseFloat(arMean.toFixed(1))}`);
    return parseFloat(arMean.toFixed(1));
}

showArray();
arithmeticMean();
