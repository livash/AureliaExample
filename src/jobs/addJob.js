import {inject} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';

@inject(DataRepository)
export class AddJob {
    constructor(dataRepository) {
        this.job = {
            jobType: "Full Time",
            jobSkills: []
        };
        this.dataRepository = dataRepository;
        this.dataRepository.getJobTypes().then(jobTypes => {
            this.jobTypes = jobTypes;
        });
    }

    activate(params, routeConfig, navInstruction) {
        this.router = navInstruction.router;
    }

    save() {
        if (this.job.needDate) {
            this.job.needDate = new Date(this.job.needDate);
        }
        this.dataRespository.addJob(this.job)
            .then( job => this.router.navigateToRoute('job'));
    }
}