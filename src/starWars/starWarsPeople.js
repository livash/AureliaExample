import {inject} from 'aurelia-framework';
import {StarWarsDataService} from 'services/starWarsDataService';

@inject(StarWarsDataService)
export class StarWarsPeople {
    constructor(starWarsDataService) {
        this.dataService = starWarsDataService;
        this.title = "Star Wars API";
    }

    activate(params) {
        this.dataService.getPeople()
            .then( results => {
                console.log({XXX: results});
                this.people = results;
            });
    }
}