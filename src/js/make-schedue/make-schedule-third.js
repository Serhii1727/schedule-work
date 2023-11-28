import { refs } from "../refs";
import { getDayOfWeek } from "../change-day";


function makeScheduleThirdTwoHours(employees) {
    for (let i = 0; i < employees.length; i += 1) {
        const nameLastStation = employees[i].stations[1].station;
        if (nameLastStation === "lh-fsb-okies") {
            refs.trRhFscRollOverSteam.querySelector('[data-third]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 11-05/13-00`,
                    station: "rh-fsc-roll-over-steam",
                });
        };
        if (nameLastStation === "rh-cushion-install") {
            refs.trLhFsbRollOverSteam.querySelector('[data-third]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 11-05/13-00`,
                    station: "lh-fsb-roll-over-steam",
                });
        };
         if (nameLastStation === "lh-cushion-install") {
            refs.trRhFsbRollOverSteam.querySelector('[data-third]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 11-05/13-00`,
                    station: "rh-fsb-roll-over-steam",
                });
        };
         if (nameLastStation === "lh-fsc-okies") {
            refs.trLhCushionInstall.querySelector('[data-third]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 11-05/13-00`,
                    station: "lh-cushion-install",
                });
        };

        if (nameLastStation === "lh-fsc-roll-over-steam") {
            refs.trLhFsbOkies.querySelector('[data-third]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 11-05/13-00`,
                    station: "lh-fsb-okies",
                });
        };
        if (nameLastStation === "rh-fsc-roll-over-steam") {
            refs.trRhFsbOkies.querySelector('[data-third]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 11-05/13-00`,
                    station: "rh-fsb-okies",
                });
        };
        if (nameLastStation === "rh-fsc-okies") {
            refs.trRhCushionInstall.querySelector('[data-third]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 11-05/13-00`,
                    station: "rh-cushion-install",
                });
        };

        if (nameLastStation === "rh-fsb-okies") {
            refs.trLhFscRollOverSteam.querySelector('[data-third]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 11-05/13-00`,
                    station: "lh-fsc-roll-over-steam",
                });
        };
        if (nameLastStation === "lh-fsb-roll-over-steam") {
            refs.trLhFscOkies.querySelector('[data-third]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 11-05/13-00`,
                    station: "lh-fsc-okies",
                });
        };
        if (nameLastStation === "rh-fsb-roll-over-steam") {
            refs.trRhFscOkies.querySelector('[data-third]').textContent = employees[i].name;
            employees[i].stations.push({
                    time: `${getDayOfWeek()} 11-05/13-00`,
                    station: "rh-fsc-okies",
                });
        };
    }

    console.log(employees);

    localStorage.setItem('third', JSON.stringify(employees));
}

export default makeScheduleThirdTwoHours;