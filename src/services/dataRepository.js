import {eventsData} from 'services/mockData';
import {processDate} from 'services/helper';

export class DataRepository {
    constructor() {
        //this.events = eventsData;
    }

    getEvents() {
        let promise = new Promise((resolve, reject) => {
            if (!this.events) {
                this.events = eventsData;
                this.events.forEach(item => {
                    item.dateTime = processDate(item.dateTime);
                });
                resolve(this.events);
            } else {
                resolve(this.events);
            }
        });

        return promise;
    }

    getEvent(eventId) {
        return this.events.find(event => event.id == eventId);
    }
}