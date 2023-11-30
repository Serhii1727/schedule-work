import { employees } from "./api-service/data-employees";
import { refs } from "./js/refs";
import makeSceduleFirstTwoHours from "./js/make-schedue/make-schedule-first";
import makeScheduleSecondTwoHours from "./js/make-schedue/make-schedule-second";
import makeScheduleThirdTwoHours from "./js/make-schedue/make-schedule-third";
import makeScheduleFourthTwoHours from "./js/make-schedue/make-schedule-fourth";
import { getDayOfWeek, renderDayOfWeek } from "./js/change-day";
import { checkLocalStorageFirst, getDataLocalStorageFirst, checkLocalStorageSecond, getDataLocalStorageSecond, checkLocalStorageThird, getDataLocalStorageThird, checkLocalStorageFourth, getDataLocalStorageFourth, newOptionButton } from './js/local-storage';
import clearHtmlTableLocalStorage from "./js/clear-html";
import removeClass from "./js/remove-class";
import createDataStationsToEmployees from "./js/create-data-stations";

renderDayOfWeek();
newOptionButton.increaseCounter()

refs.buttonMakeSchedule.addEventListener('click', () => {
    
    if (newOptionButton.counter === 1) {
        
        makeSceduleFirstTwoHours(employees);
        newOptionButton.increaseCounter()
        localStorage.setItem('button-counter', JSON.stringify(newOptionButton))
        return;
    };

    if (newOptionButton.counter === 2) {
        const data = getDataLocalStorageFirst();
        makeScheduleSecondTwoHours(data);
        newOptionButton.increaseCounter();
        localStorage.setItem('button-counter', JSON.stringify(newOptionButton))
        return;
    };
    if (newOptionButton.counter === 3) {
        const data = getDataLocalStorageSecond()
        makeScheduleThirdTwoHours(data);
        newOptionButton.counter += 1; 
        localStorage.setItem('button-counter', JSON.stringify(newOptionButton))
        return;
    };
    if (newOptionButton.counter === 4) {
        const data = getDataLocalStorageThird()
        makeScheduleFourthTwoHours(data);
        newOptionButton.counter = 1;
        localStorage.setItem(`${getDayOfWeek()}`, JSON.stringify(getDataLocalStorageFourth()))
        localStorage.setItem('button-counter', JSON.stringify(newOptionButton));
        console.log(data);
        createDataStationsToEmployees(data)
        console.log(employees)
        return;
    };
    
});

refs.buttonClearSchedule.addEventListener('click', () => {
    clearHtmlTableLocalStorage();
    removeClass(employees)

})

checkLocalStorageFirst();
checkLocalStorageSecond();
checkLocalStorageThird();
checkLocalStorageFourth();






