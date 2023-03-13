const form = document.getElementById('form'); 
form.addEventListener('submit', handleSubmit)

const statusTitle = document.getElementById('status');
const attempt = document.getElementById('attempt')
const inputValue = document.getElementById('kick')
const result = document.getElementById('resutlt')
const btnRestart = document.getElementById('btn-restart')

const numberDraw = Math.round(Math.random() * 10);

function handleSubmit(e) {
    e.preventDefault();

    const kick = inputValue.value;
    
    if(!kick) {
        alert('Digite algum valor!')
        return
    }

    if(numberDraw == kick) {
        alert('Você acertou!')
    } else if(numberDraw > kick) {
        alert('O número é maior!')
    } else if(numberDraw < kick) {
        alert('O número é menor!')
    }
} 