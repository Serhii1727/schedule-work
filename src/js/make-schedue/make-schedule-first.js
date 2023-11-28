import { refs } from "../refs";
import { getDayOfWeek } from "../change-day";

function makeSceduleFirstTwoHours(employees) {
    const arrayRandomEmloyees = [...employees].map((employee) => {
        employee.number = getRandomNumber();
        return employee;
    })
        .sort((firstEmployee, secondEmployee) => { return firstEmployee.number - secondEmployee.number })
        .map(({ name }) => { return name });
    
    refs.trLhFsbOkies.querySelector('[data-first]').textContent = arrayRandomEmloyees[0];
    refs.trLhFsbOkies.querySelector('[data-first]').classList.add(arrayRandomEmloyees[0])

    refs.trLhFsbRollOverSteam.querySelector('[data-first]').textContent = arrayRandomEmloyees[1];
    refs.trLhFsbRollOverSteam.querySelector('[data-first]').classList.add(arrayRandomEmloyees[1]);

    refs.trRhFsbOkies.querySelector('[data-first]').textContent = arrayRandomEmloyees[2];
    refs.trRhFsbOkies.querySelector('[data-first]').classList.add(arrayRandomEmloyees[2])
    
    refs.trRhFsbRollOverSteam.querySelector('[data-first]').textContent = arrayRandomEmloyees[3];
    refs.trRhFsbRollOverSteam.querySelector('[data-first]').classList.add(arrayRandomEmloyees[3]);

    refs.trLhFscOkies.querySelector('[data-first]').textContent = arrayRandomEmloyees[4];
    refs.trLhFscOkies.querySelector('[data-first]').classList.add(arrayRandomEmloyees[4]);

    refs.trLhFscRollOverSteam.querySelector('[data-first]').textContent = arrayRandomEmloyees[5];
    refs.trLhFscRollOverSteam.querySelector('[data-first]').classList.add(arrayRandomEmloyees[5]);

    refs.trRhFscOkies.querySelector('[data-first]').textContent = arrayRandomEmloyees[6];
    refs.trRhFscOkies.querySelector('[data-first]').classList.add(arrayRandomEmloyees[6]);

    refs.trRhFscRollOverSteam.querySelector('[data-first]').textContent = arrayRandomEmloyees[7];
    refs.trRhFscRollOverSteam.querySelector('[data-first]').classList.add(arrayRandomEmloyees[7]);

    refs.trLhCushionInstall.querySelector('[data-first]').textContent = arrayRandomEmloyees[8];
    refs.trLhCushionInstall.querySelector('[data-first]').classList.add(arrayRandomEmloyees[8])

    refs.trRhCushionInstall.querySelector('[data-first]').textContent = arrayRandomEmloyees[9];
    refs.trRhCushionInstall.querySelector('[data-first]').classList.add(arrayRandomEmloyees[9])
    
    for (let i = 0; i < arrayRandomEmloyees.length; i += 1) {

        employees.find((employee) => {
            const { name } = employee;
            
            if (name === arrayRandomEmloyees[i]) {
                
        
                const placeElement = document.querySelector(`.${name}`);
                const parentElement = placeElement.parentNode;
                
                const currentPosition = {
                    time: `${getDayOfWeek()} 6-30/8-30`,
                    station: parentElement.dataset.name,
                }
                
                employee.stations.push(currentPosition)  
                
            }
        })

        localStorage.setItem('first', JSON.stringify(employees));
    }
    
}

function getRandomNumber() {
    return Number((Math.random() * 10).toFixed(4)) 
}

export default makeSceduleFirstTwoHours;