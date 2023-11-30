import { refs } from "./refs";
import OptionsButton from "./button";

export const newOptionButton = new OptionsButton()


export function checkLocalStorageFirst() {
    const dataLocalStorageFirst = JSON.parse(localStorage.getItem('first'));
    const dataButtonOptions = JSON.parse(localStorage.getItem('button-counter'));
    

    
    
    if (dataButtonOptions) {
        const { counter } = dataButtonOptions;

       
        newOptionButton.changeCounter(counter);
    }
    if (dataLocalStorageFirst) {
        
        dataLocalStorageFirst.forEach(employee => {

            if (employee.stations[0].station === 'lh-fsb-okies') {
                refs.trLhFsbOkies.querySelector('[data-first]').textContent = employee.name;
            }
            
            if (employee.stations[0].station === 'lh-fsb-roll-over-steam') {
                refs.trLhFsbRollOverSteam.querySelector('[data-first]').textContent = employee.name;
            }
            
            if (employee.stations[0].station === 'rh-fsb-okies') {
                refs.trRhFsbOkies.querySelector('[data-first]').textContent = employee.name;
            }
            
            if (employee.stations[0].station === 'rh-fsb-roll-over-steam') {
                refs.trRhFsbRollOverSteam.querySelector('[data-first]').textContent = employee.name;
            }
            
            if (employee.stations[0].station === 'lh-fsc-okies') {
                refs.trLhFscOkies.querySelector('[data-first]').textContent = employee.name;
            }
            
            if (employee.stations[0].station === 'lh-fsc-roll-over-steam') {
                refs.trLhFscRollOverSteam.querySelector('[data-first]').textContent = employee.name;
            }
            
            if (employee.stations[0].station === 'rh-fsc-okies') {
                refs.trRhFscOkies.querySelector('[data-first]').textContent = employee.name;
            }
             
            if (employee.stations[0].station === 'rh-fsc-roll-over-steam') {
                refs.trRhFscRollOverSteam.querySelector('[data-first]').textContent = employee.name;
            }
            
            if (employee.stations[0].station === 'lh-cushion-install') {
                refs.trLhCushionInstall.querySelector('[data-first]').textContent = employee.name;
            }
            
            if (employee.stations[0].station === 'rh-cushion-install') {
                refs.trRhCushionInstall.querySelector('[data-first]').textContent = employee.name;
            }
            
            
        })

        
    
    }
};

export function getDataLocalStorageFirst() {
    const dataLocalStorageFirst = JSON.parse(localStorage.getItem('first'));
    if (dataLocalStorageFirst) {
        return dataLocalStorageFirst;
    }
    
};

export function checkLocalStorageSecond() {
    const dataLocalStorageSecond = JSON.parse(localStorage.getItem('second'));
    const dataButtonOptions = JSON.parse(localStorage.getItem('button-counter'));
    

    
    if (dataButtonOptions) {
        const { counter } = dataButtonOptions;
        newOptionButton.changeCounter(counter);
    }
    if (dataLocalStorageSecond) {
        
        dataLocalStorageSecond.forEach(employee => {

            
            if (employee.stations[1].station === 'lh-fsb-okies') {
                refs.trLhFsbOkies.querySelector('[data-second]').textContent = employee.name;
            }
            
            if (employee.stations[1].station === 'lh-fsb-roll-over-steam') {
                refs.trLhFsbRollOverSteam.querySelector('[data-second]').textContent = employee.name;
            }
            
            if (employee.stations[1].station === 'rh-fsb-okies') {
                refs.trRhFsbOkies.querySelector('[data-second]').textContent = employee.name;
            }
            
            if (employee.stations[1].station === 'rh-fsb-roll-over-steam') {
                refs.trRhFsbRollOverSteam.querySelector('[data-second]').textContent = employee.name;
            }
            
            if (employee.stations[1].station === 'lh-fsc-okies') {
                refs.trLhFscOkies.querySelector('[data-second]').textContent = employee.name;
            }
            
            if (employee.stations[1].station === 'lh-fsc-roll-over-steam') {
                refs.trLhFscRollOverSteam.querySelector('[data-second]').textContent = employee.name;
            }
            
             if (employee.stations[1].station === 'rh-fsc-okies') {
                refs.trRhFscOkies.querySelector('[data-second]').textContent = employee.name;
            }
            
            if (employee.stations[1].station === 'rh-fsc-roll-over-steam') {
                refs.trRhFscRollOverSteam.querySelector('[data-second]').textContent = employee.name;
            }
            
            if (employee.stations[1].station === 'lh-cushion-install') {
                refs.trLhCushionInstall.querySelector('[data-second]').textContent = employee.name;
            }
            
            if (employee.stations[1].station === 'rh-cushion-install') {
                refs.trRhCushionInstall.querySelector('[data-second]').textContent = employee.name;
            }
            
        })

        
    
    }
};

export function getDataLocalStorageSecond() {
    const dataLocalStorageSecond = JSON.parse(localStorage.getItem('second'));
    if (dataLocalStorageSecond) {
        return dataLocalStorageSecond;
    }
    
};

export function checkLocalStorageThird() {
    const dataLocalStorageThird = JSON.parse(localStorage.getItem('third'));
    const dataButtonOptions = JSON.parse(localStorage.getItem('button-counter'));
    

    
    if (dataButtonOptions) {
        const { counter } = dataButtonOptions;
        newOptionButton.changeCounter(counter);
    }
    if (dataLocalStorageThird) {
        
        dataLocalStorageThird.forEach(employee => {
            

            
            if (employee.stations[2].station === 'lh-fsb-okies') {
                refs.trLhFsbOkies.querySelector('[data-third]').textContent = employee.name;
            }
            
            if (employee.stations[2].station === 'lh-fsb-roll-over-steam') {
                refs.trLhFsbRollOverSteam.querySelector('[data-third]').textContent = employee.name;
            }
            
            if (employee.stations[2].station === 'rh-fsb-okies') {
                
                refs.trRhFsbOkies.querySelector('[data-third]').textContent = employee.name;
            }
            
            if (employee.stations[2].station === 'rh-fsb-roll-over-steam') {
                
                refs.trRhFsbRollOverSteam.querySelector('[data-third]').textContent = employee.name;
            }
            
            if (employee.stations[2].station === 'lh-fsc-okies') {
                refs.trLhFscOkies.querySelector('[data-third]').textContent = employee.name;
            }
            
            if (employee.stations[2].station === 'lh-fsc-roll-over-steam') {
                refs.trLhFscRollOverSteam.querySelector('[data-third]').textContent = employee.name;
            }
            
             if (employee.stations[2].station === 'rh-fsc-okies') {
                refs.trRhFscOkies.querySelector('[data-third]').textContent = employee.name;
            }
            
            if (employee.stations[2].station === 'rh-fsc-roll-over-steam') {
                refs.trRhFscRollOverSteam.querySelector('[data-third]').textContent = employee.name;
            }
            
            if (employee.stations[2].station === 'lh-cushion-install') {
                refs.trLhCushionInstall.querySelector('[data-third]').textContent = employee.name;
            }
            
            if (employee.stations[2].station === 'rh-cushion-install') {
                refs.trRhCushionInstall.querySelector('[data-third]').textContent = employee.name;
            }
            
        })
        
    
    }
};

export function getDataLocalStorageThird() {
    const dataLocalStorageThird = JSON.parse(localStorage.getItem('third'));
    if (dataLocalStorageThird) {
        return dataLocalStorageThird;
    }
    
};

export function checkLocalStorageFourth() {
    const dataLocalStorageFourth = JSON.parse(localStorage.getItem('fourth'));
    const dataButtonOptions = JSON.parse(localStorage.getItem('button-counter'));
    

    
    if (dataButtonOptions) {
        const { counter } = dataButtonOptions;
        newOptionButton.changeCounter(counter)
    }
    if (dataLocalStorageFourth) {
        
        dataLocalStorageFourth.forEach(employee => {
            

            
            if (employee.stations[3].station === 'lh-fsb-okies') {
                refs.trLhFsbOkies.querySelector('[data-fourth]').textContent = employee.name;
            }
            
            if (employee.stations[3].station === 'lh-fsb-roll-over-steam') {
                refs.trLhFsbRollOverSteam.querySelector('[data-fourth]').textContent = employee.name;
            }
            
            if (employee.stations[3].station === 'rh-fsb-okies') {
                
                refs.trRhFsbOkies.querySelector('[data-fourth]').textContent = employee.name;
            }
            
            if (employee.stations[3].station === 'rh-fsb-roll-over-steam') {
                
                refs.trRhFsbRollOverSteam.querySelector('[data-fourth]').textContent = employee.name;
            }
            
            if (employee.stations[3].station === 'lh-fsc-okies') {
                refs.trLhFscOkies.querySelector('[data-fourth]').textContent = employee.name;
            }
            
            if (employee.stations[3].station === 'lh-fsc-roll-over-steam') {
                refs.trLhFscRollOverSteam.querySelector('[data-fourth]').textContent = employee.name;
            }
            
             if (employee.stations[3].station === 'rh-fsc-okies') {
                refs.trRhFscOkies.querySelector('[data-fourth]').textContent = employee.name;
            }
            
            if (employee.stations[3].station === 'rh-fsc-roll-over-steam') {
                refs.trRhFscRollOverSteam.querySelector('[data-fourth]').textContent = employee.name;
            }
            
            if (employee.stations[3].station === 'lh-cushion-install') {
                refs.trLhCushionInstall.querySelector('[data-fourth]').textContent = employee.name;
            }
            
            if (employee.stations[3].station === 'rh-cushion-install') {
                refs.trRhCushionInstall.querySelector('[data-fourth]').textContent = employee.name;
            }
            
        })
        
    
    }
};

export function getDataLocalStorageFourth() {
    const dataLocalStorageFourth = JSON.parse(localStorage.getItem('fourth'));
    if (dataLocalStorageFourth) {
        return dataLocalStorageFourth;
    }
    
};

