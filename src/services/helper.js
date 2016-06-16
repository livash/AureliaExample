import moment from 'moment';

export function processDate(date) {
    return moment(date).format("MM/DD/YY HH:mm");
};