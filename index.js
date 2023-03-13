const form = document.getElementById('form'); 
form.addEventListener('submit', handleSubmit)

const statusTitle = document.getElementById('status');
const attempt = document.getElementById('attempt')
const inputValue = document.getElementById('kick')
const result = document.getElementById('resutlt')
const btnRestart = document.getElementById('btn-restart')

const GuessNumber = {
    max: 10,
    attemptsNumber: 0,
    numberDraw: function() {
        return Math.round(Math.random() * this.max);
    },
    showButtonRestart: function() {
        btnRestart.style.display = 'flex'
    },
    clearImput: function() {
        inputValue.value = '';
    },
    updateAttempt: function(attempt, value) {
        attempt.innerHTML = 'Tentativa: ' + value
    },

    correctAnswear: function(message) {
        this.showButtonRestart();

        statusTitle.innerHTML = message;
        statusTitle.classList.remove('incorrect-answear');
        statusTitle.classList.add('status-correct');

        result.classList.remove('result-box-default')
        result.classList.add('result-correct-answear')

        this.clearImput();
    },

    incorrectAnswear: function(message) {
        statusTitle.innerHTML = message;
        statusTitle.classList.add('incorrect-answear');

        this.clearImput();
    },

}


randomNumber = GuessNumber.numberDraw()
function handleSubmit(e) {
    e.preventDefault();

    const kick = inputValue.value;
    
    if(!kick) {
        alert('Digite algum valor!')
        return
    }

    GuessNumber.updateAttempt(attempt, ++GuessNumber.attemptsNumber)

    if(randomNumber == kick) {
        GuessNumber.correctAnswear('Parabéns! Você ganhou!');
    } else if(randomNumber > kick) {
        GuessNumber.incorrectAnswear('O número é maior...')
    } else if(randomNumber < kick) {
        GuessNumber.incorrectAnswear('O número é menor...')
    }
} 

function restartGame() {
    document.location.reload(true);
}