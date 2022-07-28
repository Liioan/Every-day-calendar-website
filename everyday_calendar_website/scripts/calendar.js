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
    const tomorrow = dateFns.startOfTomorrow(now);
    const difference = tomorrow.getTime() - now.getTime();

    let sl = Math.floor((difference % (1000 * 60)) / 1000);
    let ml = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let hl = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let s = now.getSeconds();
    let m = now.getMinutes();
    let h = now.getHours();
    
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
};

today.innerHTML =  `${dayName[now.getDay()]} ${now.toLocaleDateString()}`;

setInterval(tick, 1000);