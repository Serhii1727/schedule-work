import { employees } from "./api-service/data-employees";
import { refs } from "./js/refs";
import makeSceduleFirstTwoHours from "./js/make-schedue/make-schedule-first";
import makeScheduleSecondTwoHours from "./js/make-schedue/make-schedule-second";
import makeScheduleThirdTwoHours from "./js/make-schedue/make-schedule-third";
import makeScheduleFourthTwoHours from "./js/make-schedue/make-schedule-fourth";
import { getDayOfWeek, renderDayOfWeek } from "./js/change-day";
import { optionsButton } from "./js/button";
import { checkLocalStorageFirst, getDataLocalStorageFirst, checkLocalStorageSecond, getDataLocalStorageSecond, checkLocalStorageThird, getDataLocalStorageThird, checkLocalStorageFourth, getDataLocalStorageFourth } from './js/local-storage';
import clearHtmlTableLocalStorage from "./js/clear-html";

renderDayOfWeek();

refs.buttonMakeSchedule.addEventListener('click', () => {
    
    if (optionsButton.counter === 1) {
        makeSceduleFirstTwoHours(employees);
        console.log(employees)
        optionsButton.counter += 1;
        localStorage.setItem('button-counter', JSON.stringify(optionsButton))
        return;
    };

    if (optionsButton.counter === 2) {
        const data = getDataLocalStorageFirst()
        makeScheduleSecondTwoHours(data);
        optionsButton.counter += 1; 
        localStorage.setItem('button-counter', JSON.stringify(optionsButton))
        return;
    };
    if (optionsButton.counter === 3) {
        const data = getDataLocalStorageSecond()
        makeScheduleThirdTwoHours(data);
        optionsButton.counter += 1; 
        localStorage.setItem('button-counter', JSON.stringify(optionsButton))
        return;
    };
    if (optionsButton.counter === 4) {
        const data = getDataLocalStorageThird()
        makeScheduleFourthTwoHours(data);
        optionsButton.counter = 1;
        localStorage.setItem(`${getDayOfWeek()}`, JSON.stringify(getDataLocalStorageFourth()))
        localStorage.setItem('button-counter', JSON.stringify(optionsButton))
        employees.forEach(employee => {
            delete employee.number
            employee.stations = []
            
    refs.trLhFsbOkies.querySelector('[data-first]').classList.remove(employee.name)

    
    refs.trLhFsbRollOverSteam.querySelector('[data-first]').classList.remove(employee.name);

    
    refs.trRhFsbOkies.querySelector('[data-first]').classList.remove(employee.name)
    
    
    refs.trRhFsbRollOverSteam.querySelector('[data-first]').classList.remove(employee.name);

    
    refs.trLhFscOkies.querySelector('[data-first]').classList.remove(employee.name);

    
    refs.trLhFscRollOverSteam.querySelector('[data-first]').classList.remove(employee.name);

    
    refs.trRhFscOkies.querySelector('[data-first]').classList.remove(employee.name);

    
    refs.trRhFscRollOverSteam.querySelector('[data-first]').classList.remove(employee.name);

    
    refs.trLhCushionInstall.querySelector('[data-first]').classList.remove(employee.name)

    
    refs.trRhCushionInstall.querySelector('[data-first]').classList.remove(employee.name)
        })
        return;
    };
    
});

refs.buttonClearSchedule.addEventListener('click', clearHtmlTableLocalStorage)

checkLocalStorageFirst();
checkLocalStorageSecond();
checkLocalStorageThird();
checkLocalStorageFourth();



