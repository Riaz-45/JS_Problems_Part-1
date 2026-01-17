// inch to feet conversion

function inchToFeet(inch){
    const feet = inch/12;
    return feet;
}

// inch to feet (6 feet 3 inch)

function inchToFeet2(inch){
    const feetFraction = inch/12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch ';
    return result;
}

const height = inchToFeet(75);
const height2 = inchToFeet2(75);
console.log(height2);