const millisecondsInDay = 86400000;

const monthsDictionary: Record<string, string> = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December"
};

const daysTillSunday: Record<string, number> = {
  Mon: 6,
  Tue: 5,
  Wed: 4,
  Thu: 3,
  Fri: 2,
  Sat: 1
};

export function generateDate(): string {
  const isSunday = new Date().toString().includes("Sun");
  const dateArray = Date().split(" ");
  if (isSunday) {
    let dayNumber = dateArray[2];
    if (dayNumber.startsWith("0")) {
      dayNumber = dayNumber.slice(1);
    }
    return `${monthsDictionary[dateArray[1]]} ${dayNumber}`;
  } else {
    const day = dateArray[0];
    const nextSunday = new Date(
      Date.now() + millisecondsInDay * daysTillSunday[day]
    ).toString();
    const nextSundayArray = nextSunday.split(" ");
    let dayNumber = nextSundayArray[2];
    if (dayNumber.startsWith("0")) {
      dayNumber = dayNumber.slice(1);
    }
    return `${monthsDictionary[nextSundayArray[1]]} ${dayNumber}`;
  }
}
