import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class StarWarsDataService {
    constructor(http) {
        this.http = http;
    }

    getPeople() {
        console.log("Inside getPeople method");
        let baseUrl = 'http://swapi.co/api/people?format=json'; 
        var promise = new Promise((resolve, reject) => {
            this.http.get(baseUrl)
                .then( result => {
                    var data = JSON.parse(result.response);
                    resolve(data.results);
                })
                .catch(error => {
                    console.log('Error getting StarWars API data');
                    console.log(error);
                });
        });
        
        return promise;
    }
}