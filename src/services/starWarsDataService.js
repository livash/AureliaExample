import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class StarWarsDataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    getPeople() {
        console.log("Inside getPeople method");
        let promise = new Promise((resolve, reject) => {
            this.httpClient.get('http://swapi.co/api/people?format=json')
                .then((result) => {
                    console.log(result);
                    // let data = JSON.parse(result.response);
                    // console.log({"Hello:": data});
                    // this.people = data;
                    resolve(this.people);
                })
                .catch(error => {
                    console.log('Error getting StarWars API data');
                    console.log(error);
                });
        });
        
        return promise;
    }
}