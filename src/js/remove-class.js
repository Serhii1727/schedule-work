import { refs } from "./refs"

function removeClass(employees) {
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
}

export default removeClass;