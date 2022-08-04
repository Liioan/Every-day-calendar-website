const body = document.querySelector('body');
const button = document.querySelector('.switch');
const icon = document.querySelector('i');
let flag = 0;

const saveTheme = flag =>{
    localStorage.setItem('flag', JSON.stringify(flag));
}

 
const themeSwitch = () => {
    if(flag === 0){
        flag++;
        body.classList.add('dark-theme');
        icon.classList.add('dark-switch');
    } else {
        flag--;
        body.classList.remove('dark-theme')
        icon.classList.remove('dark-switch');
    }
};

if(JSON.parse(localStorage.getItem('flag')) === 1){
    JSON.parse(localStorage.getItem('flag'));
    themeSwitch()
}

button.addEventListener('click', e =>{
    themeSwitch();
    saveTheme(flag);
});

