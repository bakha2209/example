// Module package file


// const calculate = require('./hisob');
// const natija = calculate.kopaytirish(80,20);
// console.log("Natija:", natija);


// const natija2 = calculate.bolish(80,20);
// console.log(natija2)


// console.log(require("module").wrapper);


const Account = require('./account');
Account.tellMeAboutClass();
Account.tellMeTime();
const myAccount = new Account ('Martin',200000,11644615484)

console.log("==========");
myAccount.giveMeDetails();

myAccount.makeDeposit(1000000);

// bugatti chiron 2.4mln

myAccount.withdrawMoney(2400000);
