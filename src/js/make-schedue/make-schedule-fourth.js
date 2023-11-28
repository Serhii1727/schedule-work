import { refs } from "../refs";
import { getDayOfWeek } from "../change-day";

function makeScheduleFourthTwoHours(employees) {
    for (let i = 0; i < employees.length; i += 1) {
    const nameLastStation = employees[i].stations[2].station;
    if (nameLastStation === "rh-cushion-install") {
        refs.trLhFsbRollOverSteam.querySelector('[data-fourth]').textContent = employees[i].name;
        employees[i].stations.push({
            time: `${getDayOfWeek()} 13-10/14-30`,
            station: "lh-fsb-roll-over-steam",
        })
        };
    if (nameLastStation === "lh-cushion-install") {
        refs.trRhFsbRollOverSteam.querySelector('[data-fourth]').textContent = employees[i].name;
        employees[i].stations.push({
                time: `${getDayOfWeek()} 13-10/14-30`,
                station: "rh-fsb-roll-over-steam",
            });
        };
    if (nameLastStation === "lh-fsb-okies") {
            refs.trRhFscRollOverSteam.querySelector('[data-fourth]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 13-10/14-30`,
                    station: "rh-fsc-roll-over-steam",
                });
        };
        if (nameLastStation === "lh-fsc-okies") {
            refs.trLhCushionInstall.querySelector('[data-fourth]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 13-10/14-30`,
                    station: "lh-cushion-install",
                });
        };

        if (nameLastStation === "lh-fsc-roll-over-steam") {
            refs.trLhFsbOkies.querySelector('[data-fourth]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 13-10/14-30`,
                    station: "lh-fsb-okies",
                });
        };
        if (nameLastStation === "rh-fsc-roll-over-steam") {
            refs.trRhFsbOkies.querySelector('[data-fourth]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 13-10/14-30`,
                    station: "rh-fsb-okies",
                });
        };
        if (nameLastStation === "rh-fsc-okies") {
            refs.trRhCushionInstall.querySelector('[data-fourth]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 13-10/14-30`,
                    station: "rh-cushion-install",
                });
        };

        if (nameLastStation === "rh-fsb-okies") {
            refs.trLhFscRollOverSteam.querySelector('[data-fourth]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 13-10/14-30`,
                    station: "lh-fsc-roll-over-steam",
                });
        };
        if (nameLastStation === "lh-fsb-roll-over-steam") {
            refs.trLhFscOkies.querySelector('[data-fourth]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 13-10/14-30`,
                    station: "lh-fsc-okies",
                });
        };
        if (nameLastStation === "rh-fsb-roll-over-steam") {
            refs.trRhFscOkies.querySelector('[data-fourth]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 13-10/14-30`,
                    station: "rh-fsc-okies",
                });
        };
    }

    localStorage.setItem('fourth', JSON.stringify(employees));

    
}

export default makeScheduleFourthTwoHours