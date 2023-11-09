import { refs } from "./refs";

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wendsney',
    'Thursday',
    'Friday',
    'Saturday',
]

export function getDayOfWeek() {
    const date = new Date();
    const numberOfDay = date.getDay();
    
    return days[numberOfDay];
}

export function renderDayOfWeek() {
    const day = getDayOfWeek()
    const renderMarkup = `<p>${day}</p>`;
    refs.section.insertAdjacentHTML('beforeend', renderMarkup)
}