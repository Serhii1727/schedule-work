import { employees } from "./api-service/data-employees";
import { refs } from "./js/refs";
import makeSceduleFirstTwoHours from "./js/make-schedue/make-schedule-first";
import makeScheduleSecondTwoHours from "./js/make-schedue/make-schedule-second";
import makeScheduleThirdTwoHours from "./js/make-schedue/make-schedule-third";
import makeScheduleFourthTwoHours from "./js/make-schedue/make-schedule-fourth";
import { renderDayOfWeek } from "./js/change-day";
import { checkLocalStorageFirst, checkLocalStorageSecond, checkLocalStorageThird, checkLocalStorageFourth, newOptionButton } from './js/local-storage';
import clearHtmlTableLocalStorage from "./js/clear-html";
import removeClass from "./js/remove-class";
import createDataStationsToEmployees from "./js/create-data-stations";

renderDayOfWeek();
newOptionButton.increaseCounter();

refs.buttonMakeSchedule.addEventListener('click', () => {
    
    if (newOptionButton.counter === 1) {
    
        makeSceduleFirstTwoHours(employees);
        newOptionButton.increaseCounter();
        newOptionButton.setLocalStorage();
        return;
    };

    if (newOptionButton.counter === 2) {
    
        makeScheduleSecondTwoHours(employees);
        newOptionButton.increaseCounter();
        newOptionButton.setLocalStorage();
        return;
    };
    if (newOptionButton.counter === 3) {

        makeScheduleThirdTwoHours(employees);
        newOptionButton.increaseCounter(); 
        newOptionButton.setLocalStorage();
        return;
    };
    if (newOptionButton.counter === 4) {

        makeScheduleFourthTwoHours(employees);
        newOptionButton.increaseCounter();
        newOptionButton.setLocalStorage();
        createDataStationsToEmployees(employees);
        return;
    };
    
});

refs.buttonClearSchedule.addEventListener('click', () => {
    clearHtmlTableLocalStorage();
    removeClass(employees);
    newOptionButton.resetCounter();

});

checkLocalStorageFirst();
checkLocalStorageSecond();
checkLocalStorageThird();
checkLocalStorageFourth();