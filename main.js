const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'

]
const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Sunday'

]
const pEL = document.getElementById('p-el');
const pTime = document.getElementById('time');
const myDate = new Date();
const formattedDate = formatDate(myDate);

function formatDate(myDate) {
    const date = {
        date: myDate.getDate(),
        fullDay: myDate.getDay(),
        fullMonth: myDate.getMonth() + 1,
        year: myDate.getFullYear(),
        hour: (myDate.getHours() % 12) || 12,
        minute: myDate.getMinutes().toString().padStart(2, '0'),
        second: myDate.getSeconds().toString().padStart(2, '0'),
        amOrPm: myDate.getHours() < 12 ? "AM" : "PM",
    }
    switch (date.fullDay) {
        case 1:
            date.fullDay = weekdays[0];
            break;
        case 2:
            date.fullDay = weekdays[1];
            break;
        case 3:
            date.fullDay = weekdays[2];
            break;
        case 4:
            date.fullDay = weekdays[3];
            break;
        case 5:
            date.fullDay = weekdays[4];
            break;
        case 6:
            date.fullDay = weekdays[5];
            break;
        case 7:
            date.fullDay = weekdays[6];
            break;
    }
    switch (date.fullMonth) {
        case 1:
            date.month = months[0];
            break;
        case 2:
            date.month = months[1];
            break;
        case 3:
            date.month = months[2];
            break;
        case 4:
            date.month = months[3];
            break;
        case 5:
            date.month = months[4];
            break;
        case 6:
            date.month = months[5];
            break;
        case 7:
            date.month = months[6];
            break;
        case 8:
            date.month = months[7];
            break;
        case 9:
            date.month = months[8];
            break;
        case 10:
            date.month = months[9];
            break;
        case 11:
            date.month = months[10];
            break;
        case 12:
            date.month = months[11];
            break;
    }
    console.log(date);
    document.getElementById('time').innerHTML = `${date.fullMonth}/${date.date}/${date.year}
${date.hour}:${date.minute}:${date.second}${date.amOrPm}
${date.fullDay}, ${date.month} ${date.date}`

    return `${date.fullMonth}/${date.date}/${date.year}
${date.hour}:${date.minute}:${date.second}${date.amOrPm}
${date.fullDay}, ${date.month} ${date.date}
`
}
// setInterval(formatDate(myDate), 1000);
pEL.textContent = myDate;
console.log(formattedDate);
