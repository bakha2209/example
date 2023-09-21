//Task-D

const moment = require("moment");
class Shop {
  non;
  lagmon;
  cola; 
    
    

  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  check() {console.log(this.non)};  
  qoldiq() {console.log(`Hozir ${moment().format("HH:mm")} holatiga ${this.non}ta non, 
  ${this.lagmon}ta lagmon, ${this.cola}ta cola mavjud`)};
  
  sotish(tovar,miqdor) {
    return this.tovar -= miqdor;
  };
  qabul(mol,son) {
    return this.mol += son;
  }
}

const savdo = new Shop (4,5,2);
savdo.qabul('non',2);
savdo.sotish('cola',1);
savdo.qoldiq();



// //task-C

// function checkSimilarity(word1,word2) {
//     word1_letter = word1.split("");
//     word2_letter = word2.split("")
//     const result = word1_letter.every((ele) => {
//         return word2_letter.includes(ele)
//     })
//     console.log(result);
// }

// checkSimilarity("derw", "werd")

// //task-B

// function getDigit(word) {
//     const word_letter = word.split("");
//     const new_list = word_letter.filter((ele) => {
//         if (ele < 0 || ele >=0) return ele;
//     })
//     console.log(new_list.length);
// }

// getDigit("34jije433")


