import {inject} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';

@inject(DataRepository)
export class Events {
    constructor(dataRepository) {
        this.events = dataRepository.getEvents
                    .then(results => this.events = results);
    }
}