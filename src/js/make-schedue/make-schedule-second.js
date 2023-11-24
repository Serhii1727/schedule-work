import { refs } from "../refs";

function makeScheduleSecondTwoHours(employees) {
    console.log(employees);
    for (let i = 0; i < employees.length; i += 1) {
        const nameLastStation = employees[i].stations[0].station;
        const obj = {
            nameEmp: employees[i].name,
            nameStation: nameLastStation,
        }
        console.log(obj)
        if (nameLastStation === "lh-fsb-okies") {
            console.log(refs.trLhFsbRollOverSteam)
            refs.trLhFsbRollOverSteam.querySelector('[data-second]').textContent = employees[i].name;
        }
    }
}

export default makeScheduleSecondTwoHours;