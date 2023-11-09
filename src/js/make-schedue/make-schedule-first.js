import { refs } from "../refs";
import { getDayOfWeek } from "../change-day";

export function makeSceduleFirstTwoHours(employees) {
    const arrayRandomEmloyees = [...employees].map((employee) => {
        employee.number = getRandomNumber();
        return employee;
    })
        .sort((firstEmployee, secondEmployee) => { return firstEmployee.number - secondEmployee.number })
        .map(({ name }) => { return name });
    
    refs.trLhFsbOkies.querySelector('[data-first]').textContent = arrayRandomEmloyees[0];
    refs.trLhFsbRollOverSteam.querySelector('[data-first]').textContent = arrayRandomEmloyees[1];
    refs.trRhFsbOkies.querySelector('[data-first]').textContent = arrayRandomEmloyees[2];
    refs.trRhFsbRollOverSteam.querySelector('[data-first]').textContent = arrayRandomEmloyees[3];
    refs.trLhFscOkies.querySelector('[data-first]').textContent = arrayRandomEmloyees[4];
    refs.trLhFscRollOverSteam.querySelector('[data-first]').textContent = arrayRandomEmloyees[5];
    refs.trRhFscOkies.querySelector('[data-first]').textContent = arrayRandomEmloyees[6];
    refs.trRhFscRollOverSteam.querySelector('[data-first]').textContent = arrayRandomEmloyees[7];
    refs.trLhCushionInstall.querySelector('[data-first]').textContent = arrayRandomEmloyees[8];
    refs.trRhCushionInstall.querySelector('[data-first]').textContent = arrayRandomEmloyees[9];
    
    for (let i = 0; i < arrayRandomEmloyees.length; i += 1) {
        employees.find((employee) => {
            const { name } = employee;
            if (name === arrayRandomEmloyees[i]) {
                refs.trLhFsbOkies.querySelector('[data-first]').classList.add(name)
        
                const placeElement = document.querySelector(`.${name}`);
                
                employee.lhFsbOkies.push(`${getDayOfWeek()} 6-30/8-30`)    
            }
        })
    }
    console.log(employees)
}

function getRandomNumber() {
    return Number((Math.random() * 10).toFixed(4)) 
}