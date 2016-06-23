import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class StarWarsDataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    getPeople() {
        let promise = new Promise((resolve, reject) => {
            this.httpClient.get('http://swapi.co/api/people').then((result) => {
                let data = JSON.parse(result.response);
                console.log({"Hello:": data});
                this.people = data;
                resolve(this.people);
            });
        });
        
        return promise;
    }
}