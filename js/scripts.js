console.log("JavaScript file loaded"); // Debugging line

const choices = ['rock', 'paper', 'scissors'];
const choiceButtons = document.querySelectorAll('.choice');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const winnerDisplay = document.getElementById('winner');
const restartButton = document.getElementById('restartButton');

choiceButtons.forEach(button => button.addEventListener('click', playGame));
restartButton.addEventListener('click', restartGame);

function playGame(e) {
    const userChoice = e.target.id;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    userChoiceDisplay.textContent = `Your Choice: ${userChoice}`;
    computerChoiceDisplay.textContent = `Computer's Choice: ${computerChoice}`;

    const winner = determineWinner(userChoice, computerChoice);
    winnerDisplay.textContent = `Winner: ${winner}`;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Draw';
    }

    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You Win!';
    } else {
        return 'Computer Wins!';
    }
}

function restartGame() {
    userChoiceDisplay.textContent = 'Your Choice: ';
    computerChoiceDisplay.textContent = 'Computer\'s Choice: ';
    winnerDisplay.textContent = 'Winner: ';
}
