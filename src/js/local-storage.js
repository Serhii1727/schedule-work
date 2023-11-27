import { employees } from "../api-service/data-employees";
import { optionsButton } from "./button";
import { refs } from "./refs";

function checkLocalStorage() {
    const dataLocalStorage = JSON.parse(localStorage.getItem('first'));
    const dataButtonOptions = JSON.parse(localStorage.getItem('button-counter'));
    
    if (dataButtonOptions) {
        optionsButton.counter = dataButtonOptions.counter;
    }
    if (dataLocalStorage) {

        
        
        dataLocalStorage.forEach(employee => {

            console.log(employee)

            if (employee.stations[0].station === 'lh-fsb-okies') {
                refs.trLhFsbOkies.querySelector('[data-first]').textContent = employee.name;
            }
            if (employee.stations[0].station === 'lh-fsb-roll-over-steam') {
                refs.trLhFsbRollOverSteam.querySelector('[data-first]').textContent = employee.name;
            }
            if (employee.stations[0].station === 'rh-fsb-okies') {
                refs.trRhFsbOkies.querySelector('[data-first]').textContent = employee.name;
            }
            if (employee.stations[0].station === 'rh-fsb-roll-over-steam') {
                refs.trRhFsbRollOverSteam.querySelector('[data-first]').textContent = employee.name;
            }
            if (employee.stations[0].station === 'lh-fsc-okies') {
                refs.trLhFscOkies.querySelector('[data-first]').textContent = employee.name;
            }
            if (employee.stations[0].station === 'lh-fsc-roll-over-steam') {
                refs.trLhFscRollOverSteam.querySelector('[data-first]').textContent = employee.name;
            }
            if (employee.stations[0].station === 'rh-fsc-okies') {
                refs.trRhFscOkies.querySelector('[data-first]').textContent = employee.name;
            }
            if (employee.stations[0].station === 'rh-fsc-roll-over-steam') {
                refs.trRhFscRollOverSteam.querySelector('[data-first]').textContent = employee.name;
            }
            if (employee.stations[0].station === 'lh-cushion-install') {
                refs.trLhCushionInstall.querySelector('[data-first]').textContent = employee.name;
            }
            if (employee.stations[0].station === 'rh-cushion-install') {
                refs.trRhCushionInstall.querySelector('[data-first]').textContent = employee.name;
            }



            
        })

        return dataLocalStorage;
    
    }
}

export default checkLocalStorage;