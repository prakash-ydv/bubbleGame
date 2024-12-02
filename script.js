var bubble = document.querySelector('.console');
let time = document.getElementById('time');
let target = document.getElementById('target');
let gola = document.getElementsByClassName('gola'); // Use getElementsByClassName (with "s")
let score = document.getElementsByClassName('score')[0]; // Access the first element in the collection
let start = document.getElementById('startOverlay');
let targetNumber;
var finalPoint = 0;
let showScore = document.querySelector('#showScore');
let overOverlay = document.querySelector('#overOverlay');
let isGameOver = false;

let timer = 60;
var bubbleHolder = "";
let point = 0;

genTarget();

// Bubble generation
{
    for (let i = 1; i <= 40; i++) {
        let randomNumber = Math.floor(Math.random() * 25);
        bubbleHolder += `<div class="gola h-[50px] w-[50px] bg-white rounded-full flex items-center justify-center text-xl m-1 hover:bg-red-900 hover:text-white select-none">${randomNumber}</div>`;
    }

    bubble.innerHTML = bubbleHolder;
}

// Timer 
function startGame () {
    isGameOver = false;
    const interval = setInterval(() => {
        if (timer !== 0) {
            timer -= 1;
        }else{
            clearInterval(interval);
            overOverlay.classList.remove('hidden');
            showScore.innerHTML = point;
            isGameOver = true;
        }
        time.textContent = timer;
    }, 1000);
    
    start.classList.add('hidden');
}

function reSetGame () {
    timer = 10;
    point = 0;
    score.innerHTML = 0;
    overOverlay.classList.add('hidden');
    if(isGameOver){
        startGame();
        genTarget();
    }
}

// Target number generation
function genTarget() {
    targetNumber = Math.floor(Math.random() * 25);
    target.innerHTML = targetNumber;
}

// Add event listeners to all elements with class "gola"
Array.from(gola).forEach((oneGola) => {
    oneGola.addEventListener('click', () => {
        if (parseInt(oneGola.innerHTML) === targetNumber) { 
            oneGola.innerHTML="X"
            point+=1;
            score.innerHTML = point;
            finalPoint = point
            genTarget(); // Generate a new target number after each correct click
        }else{
            point-=1;
            score.innerHTML = point;
        }
    });
});




