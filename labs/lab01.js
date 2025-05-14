import lodash from "lodash";

const holidays = [
    {name: "Christmas", date: new Date("2025-12-25")},
    {name: "Canada day", date: new Date("2025-20-25")},
    {name: "new year", date: new Date("2026-01-01")},
];

let today = new Date();
holidays.forEach(holiday => {
    const difference = holiday.date - today;
    const inDays = Math.ceil(diffrence/(1000*80*60*60))


})

const randomHoliday = lodash.Sample(holidays);
console.log(randomHoliday.name);

const indexOfChristmas = lodash.findIndex(holidays, { name: "Christmas"});
const indexOfCanada = lodash.findIndex(holidays, {name: "canada"});
console.log(`Index of christmas: ${indexofchristmas}`);
console.log(`Index of canada: ${indexofcanada}`);

