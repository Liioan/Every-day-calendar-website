import startOfTomorrow from 'date-fns/startOfTomorrow'

const today = document.querySelector('.today');
const hour = document.querySelector('.hour');
const hoursLeft = document.querySelector('.hours-left');

const dayName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const tick = () => {
    const now = new Date();
    const tomorrow = startOfTomorrow();
    const difference = tomorrow.getTime() - now.getTime();

    let sl = Math.floor((difference % (1000 * 60)) / 1000);
    let ml = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let hl = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let s = null;
    let m = null;
    let h = null;

    if(now.getSeconds() < 10) {
      s = `0${now.getSeconds()}`;
    } else {
      s = now.getSeconds();
    }


    if(now.getMinutes() < 10) {
      m = `0${now.getMinutes()}`;
    } else {
      m = now.getMinutes();
    }


    if(now.getHours() < 10) {
      h = `0${now.getHours()}`;
    } else {
      h = now.getHours();
    }

    const currentHour = `
        <span>${h}</span> :
        <span>${m}</span> :
        <span>${s}</span> 
    `;

    const left = `
        <span>${hl}</span> :
        <span>${ml}</span> :
        <span>${sl}</span> 
    `;

    hour.innerHTML = currentHour;
    hoursLeft.innerHTML = left; 
    today.innerHTML =  `${dayName[now.getDay()]} ${now.toLocaleDateString()}`;
};


setInterval(tick, 1000);
