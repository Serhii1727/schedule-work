import { refs } from "./refs";

function clearHtmlTableLocalStorage() {
    localStorage.removeItem('first');
    localStorage.removeItem('second');
    localStorage.removeItem('third');
    localStorage.removeItem('fourth');
    localStorage.removeItem('button-counter');

    refs.trLhFsbOkies.querySelector('[data-first]').innerHTML = '';
    refs.trLhFsbOkies.querySelector('[data-second]').innerHTML = '';
    refs.trLhFsbOkies.querySelector('[data-third]').innerHTML = '';
    refs.trLhFsbOkies.querySelector('[data-fourth]').innerHTML = '';

    refs.trLhFsbRollOverSteam.querySelector('[data-first]').innerHTML = '';
    refs.trLhFsbRollOverSteam.querySelector('[data-second]').innerHTML = '';
    refs.trLhFsbRollOverSteam.querySelector('[data-third]').innerHTML = '';
    refs.trLhFsbRollOverSteam.querySelector('[data-fourth]').innerHTML = '';

    refs.trRhFsbOkies.querySelector('[data-first]').innerHTML = '';
    refs.trRhFsbOkies.querySelector('[data-second]').innerHTML = '';
    refs.trRhFsbOkies.querySelector('[data-third]').innerHTML = '';
    refs.trRhFsbOkies.querySelector('[data-fourth]').innerHTML = '';


    refs.trRhFsbRollOverSteam.querySelector('[data-first]').innerHTML = '';
    refs.trRhFsbRollOverSteam.querySelector('[data-second]').innerHTML = '';
    refs.trRhFsbRollOverSteam.querySelector('[data-third]').innerHTML = '';
    refs.trRhFsbRollOverSteam.querySelector('[data-fourth]').innerHTML = '';

    refs.trLhFscOkies.querySelector('[data-first]').innerHTML = '';
    refs.trLhFscOkies.querySelector('[data-second]').innerHTML = '';
    refs.trLhFscOkies.querySelector('[data-third]').innerHTML = '';
    refs.trLhFscOkies.querySelector('[data-fourth]').innerHTML = '';


    refs.trLhFscRollOverSteam.querySelector('[data-first]').innerHTML = '';
    refs.trLhFscRollOverSteam.querySelector('[data-second]').innerHTML = '';
    refs.trLhFscRollOverSteam.querySelector('[data-third]').innerHTML = '';
    refs.trLhFscRollOverSteam.querySelector('[data-fourth]').innerHTML = '';


    refs.trRhFscOkies.querySelector('[data-first]').innerHTML = '';
    refs.trRhFscOkies.querySelector('[data-second]').innerHTML = '';
    refs.trRhFscOkies.querySelector('[data-third]').innerHTML = '';
    refs.trRhFscOkies.querySelector('[data-fourth]').innerHTML = '';


    refs.trRhFscRollOverSteam.querySelector('[data-first]').innerHTML = '';
    refs.trRhFscRollOverSteam.querySelector('[data-second]').innerHTML = '';
    refs.trRhFscRollOverSteam.querySelector('[data-third]').innerHTML = '';
    refs.trRhFscRollOverSteam.querySelector('[data-fourth]').innerHTML = '';


    refs.trLhCushionInstall.querySelector('[data-first]').innerHTML = '';
    refs.trLhCushionInstall.querySelector('[data-second]').innerHTML = '';
    refs.trLhCushionInstall.querySelector('[data-third]').innerHTML = '';
    refs.trLhCushionInstall.querySelector('[data-fourth]').innerHTML = '';


    refs.trRhCushionInstall.querySelector('[data-first]').innerHTML = '';
    refs.trRhCushionInstall.querySelector('[data-second]').innerHTML = '';
    refs.trRhCushionInstall.querySelector('[data-third]').innerHTML = '';
    refs.trRhCushionInstall.querySelector('[data-fourth]').innerHTML = '';
}

export default clearHtmlTableLocalStorage;