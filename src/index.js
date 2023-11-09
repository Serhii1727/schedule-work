import { employees } from "./api-service/data-employees";
import { refs } from "./js/refs";
import { makeSceduleFirstTwoHours } from "./js/make-schedue/make-schedule-first";
import { renderDayOfWeek } from "./js/change-day";
import { options } from "./js/options-button";

refs.buttonMakeSchedule.addEventListener('click', () => {
    if (options.counter < 1) {
        makeSceduleFirstTwoHours(employees);
        options.counter += 1;
    };
});

renderDayOfWeek();


