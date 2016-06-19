import moment from 'moment';

export function processDate(date, format="MM/DD/YY HH:mm") {
    return moment(date).format(format);
}