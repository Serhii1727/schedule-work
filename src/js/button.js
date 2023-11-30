class OptionsButton {
    constructor() {
        this.counter = 0;
    }

    changeCounter(newCounter) {
        this.counter = newCounter;
    }

    increaseCounter() {
        this.counter += 1;
    }

    resetCounter() {
        this.counter = 1;
    }

    setLocalStorage() {
        localStorage.setItem('button-counter', JSON.stringify(this.counter));
    };
    
};

export default OptionsButton;


