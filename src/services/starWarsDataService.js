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
        var promise1 = new Promise((resolve, reject) => {
            var promise2 = this.http.get(baseUrl);
            promise2.then( result => {
                console.log("Promise 2 is returning a result");
                console.log(result);
                    var data = JSON.parse(result.response);
                    resolve(data.results);
                });
                // .then ( result => {
                //     console.log(result);
                //     resolve(result);
                // })
                // .catch(error => {
                //     console.log('Error getting StarWars API data');
                //     console.log(error);
                // });
        });
        
        return promise1;
    }
}