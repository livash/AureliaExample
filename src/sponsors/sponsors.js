import {computedFrom} from 'aurelia-framework';

let addStockData = (tradesArray) => {
    let interval = setInterval(() => {
        let newTrade = {
        amount: (Math.random() * 100).toString().match(/\d*\.\d{2}/), // show value with two digits after decimal point
            time: new Date()
        };
        tradesArray.push(newTrade);
    }, 1000);

    return interval;
}

export class Sponsors {
  constructor() {
      this.message = "Sponsors";
      setTimeout(() => this.message = "Hello from Olena", 3000);
      this.mapCollection = new window.Map();
      this.mapCollection.set('a', 'Alibaba');
      this.mapCollection.set('b', 'Beta');
      this.mapCollection.set('c', 'City Group');
      this.mapCollection.set('d', 'Delta');
      this.person = new Person();
      this.person.firstName = "Olena";
      this.person.lastName = "Someone";
      this.trades = [{amount: 99.92, time: new Date()}];
      let interval = addStockData(this.trades);
      setTimeout(() => (clearInterval(interval)), 10*1000);
  }
}

class Person {
    firstName: 'Jane';
    lastName: 'Doe';

    @computedFrom('firstName', 'lastName');
    get fullName(){ return `${this.firstName} ${this.lastName}`; }
}