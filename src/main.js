import 'bootstrap';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();
        //.globalResources('./lib/d3.js');

    aurelia.start().then(app => app.setRoot('shell'));
}