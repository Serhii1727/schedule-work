import { employees } from "./api-service/data-employees";
import { refs } from "./js/refs";
import { makeSceduleFirstTwoHours } from "./js/make-schedue/make-schedule-first";
import makeScheduleSecondTwoHours from "./js/make-schedue/make-schedule-second";
import { renderDayOfWeek } from "./js/change-day";
import { optionsButton, unDisabledButton } from "./js/button";

refs.buttonMakeSchedule.addEventListener('click', (event) => {
    
    if (optionsButton.counter < 1) {
        makeSceduleFirstTwoHours(employees);
        optionsButton.counter += 2;
        return;
    };

    if (optionsButton.counter === 2) {
        makeScheduleSecondTwoHours(employees)
        //options.counter += 1;
        
    }
    
});

renderDayOfWeek();


