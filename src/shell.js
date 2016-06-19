import toastr from 'toastr';

export class Shell {
    constructor() {}
    configureRouter(config, router) {
        this.router = router;
        config.title = "Olena's App";
        //config.addPipelineStep('modelbind', ToastNavResult);
        //config.options.pushState = true;
        config.map([
            {
                route: ['', 'events'],
                moduleId: 'events/events',
                name: 'Events',
                title: 'Events',
                nav: true}, // default route
            {
                route: 'jobs',
                moduleId: 'jobs/jobs',
                title: 'Jobs',
                nav: true
            },
            {
                route: 'discussion',
                moduleId: 'discussion/discussion',
                title: 'Discussion',
                nav: true
            },
            {
                route: 'colors',
                moduleId: 'colors/colors',
                title: 'Colors',
                name: 'colors',
                nav: true
            },
            {
                route: 'eventDetail/:eventId',
                moduleId: 'events/eventDetail',
                name: 'eventDetail'
            },
            {
                route: 'addJob',
                moduleId: 'jobs/addJob',
                name: 'addJob',
                nav: true
            }
        ]);
        this.image = "http://aurelia.io/images/aurelia-logo.png";
    }
}

class ToastNavResult {
    run(navInstruction, next) {
        return next().then(result => {
            toastr.info(result.status); // extract status message from the navigation result data and pass it to toastr
            return result;
        });
    }
}