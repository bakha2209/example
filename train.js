//task-B

function getDigit(word) {
    const word_letter = word.split("");
    const new_list = word_letter.filter((ele) => {
        if (ele < 0 || ele >=0) return ele;
    })
    console.log(new_list.length);
}

getDigit("34jije433")


//task-C

function checkSimilarity(word1,word2) {
    word1_letter = word1.split("");
    word2_letter = word2.split("")
    const result = word1_letter.every((ele) => {
        return word2_letter.includes(ele)
    })
    console.log(result);
}

checkSimilarity("derw", "werd")