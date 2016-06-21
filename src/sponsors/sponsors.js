import {computedFrom} from 'aurelia-framework';

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
  }
}

class Person {
    firstName: 'Jane';
    lastName: 'Doe';

    @computedFrom('firstName', 'lastName');
    get fullName(){ return `${this.firstName} ${this.lastName}`; }
}