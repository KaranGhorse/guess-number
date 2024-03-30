
var msg = document.getElementById("msg");
var submitBtn = document.querySelector(".submit-btn")
var restartBtn = document.querySelector(".restart-btn")
var userGuess = document.getElementById("userGuess");
var randNum;
var userGuessNum=0;

restartBtn.addEventListener("click",()=>{
    genrateNum();
    msg.innerHTML = ""
    userGuess.value = ""
})
function genrateNum() {
    randNum=Math.floor(Math.random()*100+1);
}
genrateNum()
submitBtn.addEventListener("click",()=>{
    userGuessNum = userGuess.value;
    if (randNum == userGuessNum) {
        msg.innerHTML = "Congratulations! You guessed the correct number."
        msg.style.backgroundColor = "#4caf50c9"

    }
    else if (randNum<userGuessNum && userGuessNum<101) {
        msg.innerHTML = "Oops ! You guessed the Highest number . Please guess the Small number."
        msg.style.backgroundColor = "#EFF773C9"

    } 
    else if (randNum>userGuessNum && userGuessNum>0) {
        msg.innerHTML = "Oops ! You guessed the lowest number . Please guess the Big number."
        msg.style.backgroundColor = "#EFF773C9"
    } else {
        msg.innerHTML = "Oops ! You enterd number is out of rang. please enter (1-100)."
        msg.style.backgroundColor = "#F99B9BC9"
    }
})
userGuess.addEventListener("keyup", function(event) {
    // console.log(event.keyCode);
    if (event.keyCode === 13) {
      submitBtn.click();
    }
  });

  