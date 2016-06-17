import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {DataRepository} from 'services/dataRepository';

@inject(DataRepository, Router)
export class Events {
    constructor(dataRepository, router) {
        this.router = router;
        this.dataRepository = dataRepository;

    }

    activate(params) {
        this.dataRepository.getEvents().then(results => {
            this.events = results;
            this.events.forEach(item => {
                item.detailUrl = this.router.generate('eventDetail', {eventId: item.id});
            });
        });
    }

    goToDiscussion() {
        this.router.navigate('#/discussion');
    }
}