import {inject} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';

@inject(DataRepository)
export class Jobs {
    constructor(dataRepository) {
        this.pageTitle = "Job Listings";
        this.dataRepository = dataRepository;
    }

    activate(params, routeCOnfig, navInstruction) {
        this.jobs = [];
        this.router = navInstruction.router;
        return this.dataRepository.getJobs().then( data => {
            this.jobs = data;
        });
    }

    addJob() {
        this.router.navigateToRoute("addJob");
    }
}