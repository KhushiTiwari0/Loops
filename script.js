let number = Number(prompt("Enter a number :"));
let digitCount = 0;
let sum = 0;
let ArmstrongSum = 0;
let originalNumber = number;

// DigitCount
let temp = number;
while (temp > 0) {
    digitCount ++;
    temp = Math.floor(temp/10);
}

// Sum of digit + Armstrong 
temp = number;
while (temp > 0) {
    let digit = temp % 10;
    sum = sum + digit;
    ArmstrongSum = ArmstrongSum + Math.pow(digit, digitCount);
    temp = Math.floor(temp / 10);
}


// Check Armstrong 
let isArmstrong;
if(ArmstrongSum === originalNumber) {
    isArmstrong = "yes";
} else {
    isArmstrong = "False";
}

// Check Prime number
let isPrime = true;
if(number <= 1) {
    isPrime = false;
} else {
    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

// Find Factor
let factors = "";
for (let i = 1; i <= number; i++) {
    if(number % i === 0) {
        factors = factors + i +",";
    }
}

console.log(`Number :- ${originalNumber}`);
console.log(`Sum of its digits: ${sum}`);
console.log(`Is it an Armstrong number ? ${isArmstrong}`);
console.log(`Is it a Prime number ? ${(isPrime ? "Yes" : "No")}`);
console.log(`Factors : ${factors}`);