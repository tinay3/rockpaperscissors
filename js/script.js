$(".play").click(function() {
  let userChoice = $(".input").val();
  $(".userChoice").text(userChoice);
  if (userChoice === "rock") {
    $(".userChoice").text("rock");
  } else if (userChoice === "paper"){
    $(".userChoice").text("paper");
  } else if (userChoice === "scissors"){
    $(".userChoice").text("scissors");
  } else {
    $(".userChoice").text("Please enter a valid input")
    return userChoice;
  } 
 
  let randomNumber = 0;
function getRandomComputerChoice() {
  randomNumber = Math.ceil(Math.random() * 3);
  
  let computerChoice;
    if (randomNumber === 1){
      computerChoice = "rock";
  } else if (randomNumber === 2){
     computerChoice = "paper";
  } else {
     computerChoice = "scissors"
  } 
  return computerChoice;
}
    $(".computerChoice").text(getRandomComputerChoice());
  
  //rock
  function chooseWinner(user, computer) {
  if (randomNumber === 1 && userChoice === "paper") {
    return "User wins!!";
  } else if (randomNumber === 1 && userChoice === "scissors") {
    return "Computer wins!!";
  } else if (randomNumber === 1 && userChoice === "rock") {
    return "It's a tie!!";
  }
  //paper
   if (randomNumber === 2 && userChoice === "scissors") {
    return "User wins!!";
  } else if (randomNumber === 2 && userChoice === "rock") {
    return "Computer wins!!"
  } else if (randomNumber === 2 && userChoice === "paper") {
    return "It's a tie!!";
  }
  // scissors
   if (randomNumber === 3 && userChoice === "rock") {
    return "User wins!!";
  } else if (randomNumber === 3 && userChoice === "paper") {
    return "Computer wins!!"
  } else if (randomNumber === 3 && userChoice === "scissors") {
    return "It's a tie!!";
  }
  }
  $(".result").text(chooseWinner());
  
  });







 


