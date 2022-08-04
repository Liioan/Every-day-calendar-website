import isLeapYear from 'date-fns/isLeapYear'

const calendar = document.querySelector('.months');
const displayScore = document.querySelector('.score');
const resetButon = document.querySelector('.reset-button');
const leapYear = new Date;

//. overall user score
let scoreForCongrats = 365;
let score = 0;

//. scores for each month
let scores = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];

//. scores needed to finish month
let neededScores = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];

//. adds 29th of february if the year is leap
if(isLeapYear(leapYear)){
    let newDay = document.querySelector('.unused');
    neededScores[1] = 29;
    scoreForCongrats ++;
    newDay.classList.remove('unused');
    newDay.classList.add('day');
}

//- local storage 1 

//. saves to local storage
const saveToLocalStorage = (html, scores, score) => {
    localStorage.setItem('calendar', JSON.stringify(html, ["innerHTML"]));
    localStorage.setItem('scores', JSON.stringify(scores, scores.value));
    localStorage.setItem('score', JSON.stringify(score, score.value));
};

//- displaying congrats 

//.checs if user should get gratulations
const displayCongrats = () =>{
  if(score === scoreForCongrats){
    const popup = document.querySelector('.popup-wrapper');
    const close = document.querySelector('.popup-close');
    
    popup.style.display = 'block';


    close.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  
    popup.addEventListener('click', () => {
        popup.style.display = 'none';
    });
  }
};


//- changing target color, and score on press

//. updates overall score in ui

const updateScore = () => {
    displayScore.textContent = score;
};

//.changes color of button user pressed
const changeColor = target => {
    target.classList.toggle('checked')
};

//. adds/subtracts from month score 
const fieldsetScore = (target, parent) => {
    let id = parent.getAttribute('id');
    if(!target.classList.contains('checked')){
        scores[id] --;
        score--
    } else {
        scores[id]++;
        score++
    }
    if(scores[id] === neededScores[id]){
        target.parentElement.classList.add('finished');
    } else {
        target.parentElement.classList.remove('finished');
    }
};

//. listens for event 
calendar.addEventListener('click', e => {
    e.preventDefault();
    if(e.target.tagName === 'BUTTON' && e.target.classList.contains('day')){
        changeColor(e.target);
        fieldsetScore(e.target, e.target.parentElement);
        displayCongrats();
    }
    updateScore()
    saveToLocalStorage(calendar.innerHTML, scores, score);
});

//- reseting progres 

//.clears storage
const resetLocalStorage = () => {
    localStorage.removeItem('scores');
    localStorage.removeItem('score');
    localStorage.removeItem('calendar');
    location.reload();
};

//. listens for event
resetButon.addEventListener('click', e =>{
    const decision = confirm('are you sure?')
    if(decision){
        resetLocalStorage();
    }
})

//- local storage 2 

//. sets old html 
if(localStorage.getItem('calendar')){
    calendar.innerHTML = JSON.parse(localStorage.getItem('calendar')); 
}

//. sets all scores
if(localStorage.getItem('scores')){
    scores = JSON.parse(localStorage.getItem('scores'));
}

//. sets overall score
if(localStorage.getItem('score')){
    score = JSON.parse(localStorage.getItem('score'));
    updateScore();
}
