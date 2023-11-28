import { refs } from "../refs";
import { getDayOfWeek } from "../change-day";

function makeScheduleSecondTwoHours(employees) {

    
    
    for (let i = 0; i < employees.length; i += 1) {
        const nameLastStation = employees[i].stations[0].station;
        
        delete employees[i].number;
        
        if (nameLastStation === "lh-fsb-okies") {
            refs.trLhFsbRollOverSteam.querySelector('[data-second]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 8-40/10-45`,
                    station: "lh-fsb-roll-over-steam",
                });
        };
        if (nameLastStation === "lh-fsb-roll-over-steam") {
            refs.trLhFsbOkies.querySelector('[data-second]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 8-40/10-45`,
                    station: "lh-fsb-okies",
                });
        };

        if (nameLastStation === "rh-fsb-okies") {
            refs.trRhFsbRollOverSteam.querySelector('[data-second]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 8-40/10-45`,
                    station: "rh-fsb-roll-over-steam",
                });
        };
        if (nameLastStation === "rh-fsb-roll-over-steam") {
            refs.trRhFsbOkies.querySelector('[data-second]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 8-40/10-45`,
                    station: "rh-fsb-okies",
                });
        };
        if (nameLastStation === "lh-fsc-okies") {
            refs.trLhCushionInstall.querySelector('[data-second]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 8-40/10-45`,
                    station: "lh-cushion-install",
                });
        };
        if (nameLastStation === "lh-fsc-roll-over-steam") {
            refs.trLhFscOkies.querySelector('[data-second]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 8-40/10-45`,
                    station: "lh-fsc-okies",
                });
        };
        if (nameLastStation === "rh-fsc-okies") {
            refs.trRhCushionInstall.querySelector('[data-second]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 8-40/10-45`,
                    station: "rh-cushion-install",
                });
        };
        if (nameLastStation === "rh-fsc-roll-over-steam") {
            refs.trRhFscOkies.querySelector('[data-second]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 8-40/10-45`,
                    station: "rh-fsc-okies",
                });
        };
        if (nameLastStation === "lh-cushion-install") {
            refs.trLhFscRollOverSteam.querySelector('[data-second]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 8-40/10-45`,
                    station: "lh-fsc-roll-over-steam",
                });
        };
        if (nameLastStation === "rh-cushion-install") {
            refs.trRhFscRollOverSteam.querySelector('[data-second]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 8-40/10-45`,
                    station: "rh-fsc-roll-over-steam",
                });
        };
    }

    localStorage.setItem('second', JSON.stringify(employees));
}

export default makeScheduleSecondTwoHours;