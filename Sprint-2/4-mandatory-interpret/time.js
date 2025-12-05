function formatAs12HourClock(time) {
    const [hoursStr, minutes] = time.split(":");
    const hours = parseInt(hoursStr, 10);
    if (hours > 24 || minutes >= 60) {
        throw new Error("Invalid time format");
    }
    if (hours >= 12) {
        const adjustedHours = hours > 12 ? hours - 12 : hours;
        return `${adjustedHours}:${minutes} pm`;
    } else {
        return `${hours}:${minutes} am`;
    }
}

const moment = "13:45";
console.log(formatAs12HourClock(moment)); // Output: 2:00 pm
// console.log(formatAs12HourClock("00:30")); // "12:30 am"
    
// const currentOutput = formatAs12HourClock("08:00");
// const targetOutput = "08:00 am";
// console.assert(
//   currentOutput === targetOutput,
//   `current output: ${currentOutput}, target output: ${targetOutput}`);