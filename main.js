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
        fullDate: myDate.getDate(),
        fullDay: myDate.getDay(),
        fullMonth: myDate.getMonth() + 1,
        year: myDate.getFullYear(),
        hour: (myDate.getHours() % 12) || 12,
        minute: myDate.getMinutes().toString().padStart(2, '0'),
        second: myDate.getSeconds().toString().padStart(2, '0'),
        amOrPm: myDate.getHours() < 12 ? "AM" : "PM"
    }
    // switch statement to swtich the index of weekday to the actual string
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
    // switch statement to switch the index of month to the actual string
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

    return `${date.fullMonth}/${date.fullDate}/${date.year}\n\
${date.hour}:${date.minute}:${date.second}${date.amOrPm}\n\
${date.fullDay}, ${date.month} ${date.fullDate}
`
}


// Working updating time function
function displayTime() {
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('dayNite');

    //AM or PM
    if(hrs >= 12){
        session.innerHTML = 'PM'
    } else {
        session.innerHTML = 'AM'
    }

    // Time format
    if(hrs > 12){
        hrs = hrs - 12;
    }

    // Adding 0 in front of seconds
    if(sec < 10){
        sec = '0' + sec;
    }

    // Adding 0 in front of minutes
    if(min < 10) {
        min = '0' + min;
    }
    // Adding 0 in front of hours
    if(hrs < 10) {
        hrs = '0' + hrs;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;

}
displayTime();
setInterval(displayTime, 1000)



pEL.innerHTML = myDate;
pTime.innerHTML = formattedDate;
console.log(formattedDate);
