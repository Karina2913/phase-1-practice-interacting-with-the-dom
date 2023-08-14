const timerElement = document.getElementById('counter');
let timerValue = 0;
setTimeout(incrementTimer, 1000);

function incrementTimer() {
    timerValue += 1;
    timerElement.textContent = timerValue;
    //setTimeout(incrementTimer, 1000);
}

incrementTimer();

//buttons
const plus = document.getElementById('plus');
plus.addEventListener('click', incrementTimer);

//setTimeout(incrementTimer, 1000);

const minus = document.getElementById('minus');
minus.addEventListener('click', function decrementTimer(){
    timerValue -= 1;
    timerElement.textContent = timerValue;
});

decrementTimer();
