
const generateFibsArray = (maxNumber) => { 
    let firstFibNumber = 0;
    let secondFibNumber = 1;
    let nextFib = 1;
    const fibsArray = [firstFibNumber,secondFibNumber];
    while (nextFib <= maxNumber) { 
        fibsArray.push(nextFib);
         firstFibNumber = secondFibNumber
         secondFibNumber = nextFib;
        nextFib = firstFibNumber + secondFibNumber;
    }
    return fibsArray
}

const isOdd = (number) => { 
    return number % 2 === 1;
}


const sumFibs = (number, filter = isOdd) => { 
   return generateFibsArray(number).filter(filter).reduce((a, b) => { 
        return a + b;
    })
}

module.exports = sumFibs;