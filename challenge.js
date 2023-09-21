const random = Math.floor(Math.random() * 10) + 1;
//console.log(random);

is_game_on = false;

while(is_game_on = true) {
  function findNumber(computer) {
    let guess = parseInt(prompt('Guess a number from 1 to 10: '));
    if (guess == computer) {
      console.log("Tabriklaymiz siz ... urinishda topdingiz");
      is_game_on = false;
    } else {
      if (guess > computer) {
        console.log("Xato! kichikroq son oylang");
      } else { console.log("Xato! kattaroq son oylang")}
    }
  }
  findNumber(random)
}