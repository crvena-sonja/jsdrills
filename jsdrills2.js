function jediName(firstName, lastName){
    return `${lastName.slice(0, 3) + firstName.slice(0, 2)}`
}

// console.log(jediName('Beyonce', 'Knowles'));


function beyond(num){
    function posOrNeg(num){
        if (Math.sign(num) === 1){
            console.log('To infinity');
        } else {
            console.log('To negative infinity');
        }
    }
    switch(num) {
        case Infinity:
        case -Infinity : console.log('And beyond'); break;
        case 0 : console.log('Staying Home'); break;
        default : posOrNeg(num); break;
    }
}

//beyond(Infinity);

function decode(crypto){
    switch (crypto.charAt(0)) {
        case 'a': return crypto.charAt(1);
        case 'b': return crypto.charAt(2);
        case 'c': return crypto.charAt(3); 
        case 'd': return crypto.charAt(4); 
        default: return " "; 
    }
}

function decodeSentence(sentence) {
    sentence = sentence.split(" ");
    
    return sentence.map(decode).join('');
}

//console.log(decodeSentence("craft block argon meter bells brown croon droop"));

function daysInMonth(month) {
    function printInfo(month, days) {
        console.log(`${month} has ${days} days.`);
    }
    switch (month) {
        case 'January': printInfo(month, 31); break;
        case 'February': printInfo(month, 28.25); break;
        case 'March': printInfo(month, 31); break;
        case 'April': printInfo(month, 30); break;
        case 'May': printInfo(month, 31); break;
        case 'June': printInfo(month, 30); break;
        case 'July': printInfo(month, 31); break;
        case 'August': printInfo(month, 31); break;
        case 'September': printInfo(month, 31); break;
        case 'October': printInfo(month, 30); break;
        case 'November': printInfo(month, 31); break;
        case 'December': printInfo(month, 30); break;
        default: console.log("Thats not a month.");
    }
}

//daysInMonth('February')

function RockPaperScissors(user){
  let computer = ['rock', 'paper','scissors'][Math.floor((Math.random()*3))];
  
  if (computer === 'rock'){
      switch (user) {
          case "scissors": return "Rock beats scissors. Computer Wins.";
          case "paper": return "Paper beats Rock. User wins.";
          default: return "Tie";
      }
  } else if (computer === 'paper') {
      switch (user) {
          case "rock": return "Paper beats Rock. Computer wins.";
          case "scissors": return "Scissors beats paper. User wins.";
          default: return "Tie";
      }
  } else {
      switch (user) {
          case "paper": return "Scissors beats paper. Computer wins.";
          case "rock": return "Rock beats scissors. User wins.";
          default: return "Tie";
      }
  }
}

console.log(RockPaperScissors('paper'));