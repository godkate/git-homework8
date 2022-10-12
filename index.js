const secInHour = 3600;
const userHours = +prompt('Enter number of hours');
const userSeconds = `${userHours*secInHour} seconds in ${userHours} hours`;
if (isNaN(userHours) || userHours === 0) {
    alert(`Incorrect data`);
} else {
    alert(userSeconds);
}
