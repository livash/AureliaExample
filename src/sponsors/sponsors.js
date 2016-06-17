export class Sponsors {
  constructor() {
      this.message = "Sponsors";
      setTimeout(() => {this.message = "Hello from Olena"}, 3000);
      this.mapCollection = new window.Map();
      this.mapCollection.set('a', 'Alibaba');
      this.mapCollection.set('b', 'Beta');
      this.mapCollection.set('c', 'City Group');
      this.mapCollection.set('d', 'Delta')
  }
}