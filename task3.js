var seconds = +process.argv[2] + +process.argv[3];

// if (!Number.isInteger(seconds)) {
//     console.log("Нужно ввести 2 числа.")
//     process.exit(0);
// }

const   hourCases = ["час", "часа", "часов"],
        minuteCases = ["минута", "минуты", "минут"],
        secondCases = ["секунда", "секунды", "секунд"];

var hours = Math.floor(seconds / 3600);
seconds -= 3600 * hours;
var minutes = Math.floor(seconds / 60);
seconds -= 60 * minutes;

function getNumberCase(value) {
    if (value%10==1) return 0;
    if (value%10 >= 2 && value%10 <= 3) return 1;
    return 2;
}

var hoursHR = hours > 0 ? `${hours} ${hourCases[getNumberCase(hours)]} ` : "";
var minutesHR = minutes > 0 ? `${minutes} ${minuteCases[getNumberCase(minutes)]} ` : "";
var secondsHR = seconds > 0 ? `${seconds} ${secondCases[getNumberCase(seconds)]}` : "";

process.stdout.write(hoursHR + minutesHR + secondsHR);