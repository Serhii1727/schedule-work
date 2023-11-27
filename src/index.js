import { employees } from "./api-service/data-employees";
import { refs } from "./js/refs";
import { makeSceduleFirstTwoHours } from "./js/make-schedue/make-schedule-first";
import makeScheduleSecondTwoHours from "./js/make-schedue/make-schedule-second";
import makeScheduleThirdTwoHours from "./js/make-schedue/make-schedule-third";
import makeScheduleFourthTwoHours from "./js/make-schedue/make-schedule-fourth";
import { renderDayOfWeek } from "./js/change-day";
import { optionsButton } from "./js/button";

refs.buttonMakeSchedule.addEventListener('click', () => {
    
    if (optionsButton.counter === 1) {
        makeSceduleFirstTwoHours(employees);
        optionsButton.counter += 1;
        return;
    };

    if (optionsButton.counter === 2) {
        makeScheduleSecondTwoHours(employees);
        optionsButton.counter += 1; 
        return;
    };
    if (optionsButton.counter === 3) {
        makeScheduleThirdTwoHours(employees);
        optionsButton.counter += 1; 
        return;
    };
    if (optionsButton.counter === 4) {
        makeScheduleFourthTwoHours(employees);
        optionsButton.counter = 1;
        return;
    };
    
});

renderDayOfWeek();


