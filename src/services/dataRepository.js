import {eventsData} from 'services/mockData';
import {jobsData, jobTypes} from 'services/jobsData';
import {processDate} from 'services/helper';
import {BindingSignaler} from  'aurelia-templating-resources';
import {inject} from 'aurelia-framework';

@inject(BindingSignaler)
export class DataRepository {
    constructor(bindingSignaler) {
        // setInterval(() => {
        //     console.log("setting interval to throw a signal");
        //     bindingSignaler.signal('check-freshness');
        // }, 1000);
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

    getJobTypes() {
        var promise = new Promise((resolve, reject) => {
            if (!this.jobTypes) {
                this.jobTypes = jobTypes;
            }
            resolve(this.jobTypes);
        });

        return promise;
    }

    getJobs() {
        var promise = new Promise((resolve, reject) => {
            if (!this.jobs) {
                this.jobs = jobsData;
                this.jobs.forEach(item => item.needDate = processDate(item.needDate, 'MM/DD/YYYY'));
            }
            resolve(this.jobs);
        });

        return promise;
    }
}