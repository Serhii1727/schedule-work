import { employees } from "../api-service/data-employees";
import { getDayOfWeek } from "./change-day";

function createDataStationsToEmployees(dataEmploees) {
    
    for (let i = 0; i < dataEmploees.length; i += 1) {
        delete employees[i].number;
        dataEmploees[i].stations.forEach(item => {
            if (item.station === "lh-fsb-roll-over-steam") {
                if (!Array.isArray(employees[i].lhFsbRollOverSteam)) {
                    employees[i].lhFsbRollOverSteam = [];
                }
                
                employees[i].lhFsbRollOverSteam.push(item.time)
            }
            if (item.station === "lh-fsb-okies") {
                if (!Array.isArray(employees[i].lhFsbOkies)) {
                    employees[i].lhFsbOkies = [];
                }
                
                employees[i].lhFsbOkies.push(item.time)
            }
            if (item.station === "rh-fsb-okies") {
                if (!Array.isArray(employees[i].rhFsbOkies)) {
                    employees[i].rhFsbOkies = [];
                }
                employees[i].rhFsbOkies.push(item.time)
            }
            if (item.station === "rh-fsb-roll-over-steam") {
                if (!Array.isArray(employees[i].rhFsbRollOverSteam)) {
                    employees[i].rhFsbRollOverSteam = [];
                }
                employees[i].rhFsbRollOverSteam.push(item.time)
            }
            if (item.station === "lh-fsc-okies") {
                if (!Array.isArray(employees[i].lhFscOkies)) {
                    employees[i].lhFscOkies = [];
                }
                employees[i].lhFscOkies.push(item.time)
            }
            if (item.station === "lh-fsc-roll-over-steam") {
                if (!Array.isArray(employees[i].lhFscRollOverSteam)) {
                    employees[i].lhFscRollOverSteam = [];
                }
                employees[i].lhFscRollOverSteam.push(item.time)
            }
            if (item.station === "rh-fsc-okies") {
                if (!Array.isArray(employees[i].rhFscOkies)) {
                    employees[i].rhFscOkies = [];
                }
                employees[i].rhFscOkies.push(item.time)
            }
            if (item.station === "rh-fsc-roll-over-steam") {
                if (!Array.isArray(employees[i].rhFscRollOverSteam)) {
                    employees[i].rhFscRollOverSteam = [];
                }
                employees[i].rhFscRollOverSteam.push(item.time)
            }
            if (item.station === "lh-cushion-install") {
                if (!Array.isArray(employees[i].lhCushionInstall)) {
                    employees[i].lhCushionInstall = [];
                }
                employees[i].lhCushionInstall.push(item.time)
            }
            if (item.station === "rh-cushion-install") {
                if (!Array.isArray(employees[i].rhCushionInstall)) {
                    employees[i].rhCushionInstall = [];
                }
                employees[i].rhCushionInstall.push(item.time)
            }

            localStorage.setItem(`${getDayOfWeek()}-dataEmployees`, JSON.stringify(employees))
    })
    
    }
}

export default createDataStationsToEmployees;