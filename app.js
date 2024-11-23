let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorPara = document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const genCompChoice = () => {
        const options = ["rock","paper","scissors"];
        const randIdx = Math.floor(Math.random() * 3);
        return options[randIdx];
};

 const drawgame =() => {
        
        msg.innerText = "Game was draw. Play Again ";
        msg.style.backgroundColor = "blue";

 };
  const showWinner = (userWin, userChoice, compChoice)=>{
        if(userWin){
                userScore++;
                userScorPara.innerText = userScore;
                
                msg.innerText = "You Win!";
                msg.style.backgroundColor = "green";

} else{
        compScore++;
                compScorePara.innerText = compScore;
        
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";


}

  };

const playGame = (userChoice) => {
console.log("User choice =", userChoice);
// Generate computer choice

const compChoice = genCompChoice();
console.log("comp choice =", compChoice);

if (userChoice === compChoice) {
        // drawgame
drawgame();
} else{
let userWin = true;
if( userChoice === "rock"){
         //scissor,paper
      userWin =  compChoice ==="paper"  ?   false : true;
        }
        else if( userChoice ==="paper"){
                //rock,scissor
             userWin =  compChoice === "scissor" ? false : true ;
        }
        else{
                // Rock,paper
           userWin =  compChoice === "rock" ? false : true; 
        }
        showWinner(userWin, userChoice, compChoice);
}

}



choices .forEach( (choice) =>{
console.log(choice);
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
      playGame(userchoice);
        });
});

