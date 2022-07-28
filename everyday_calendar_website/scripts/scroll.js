const fieldsets = Array.from(document.querySelectorAll('fieldset'));
const a = document.querySelector('.link-to-today')

const months = [
    'january',
    'february',
    'march',
    'apri;',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
];

const now = new Date();
const todaysMonth = dateFns.format(now, 'MMMM').toLowerCase();



let link = months.indexOf(todaysMonth);
a.setAttribute('href', `#${link+1}`)
