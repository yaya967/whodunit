// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 356.495;
var checkBalance = true;
var isActive = true;

// your code goes here
if (checkBalance === true) {
    if (isActive && balance > 0) {
        console.log('Your balance is $' + balance.toFixed(2) + '.');
    } else if (!isActive) {
        console.log('Your account is no longer active.');
    } else if (balance === 0) {
        console.log('Your account is empty.');
    } else {
        console.log('Your balance is negative. Please contact bank.');
    }
} else {
    console.log('Thank you. Have a nice day!');
}


// var balance = 325.00;
// var checkBalance = true;
// var isActive = true;

// if (checkBalance === false) {
//     console.log("Thank you. Have a good day!");
// }
// else {
//     if (balance > 0 && isActive === true) {
//         console.log("Your balance is $" + balance.toFixed(2) + ".");
//     }
//     else if (isActive === false) {
//         console.log("Your account is no longer active");
//     }
//     else if (balance == 0) {
//         console.log("Your account is empty");
//     }
//     else {
//         console.log("Your balance is negative. Please contact bank");
//     }
// }
