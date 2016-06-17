export class Shell {
    constructor() {}
    configureRouter(config, router) {
        this.router = router;
        config.title = "Olena's App";
        config.map([
            {
                route: ['', 'events'],
                viewPorts: {
                    mainContent: {
                        moduleId: 'events/events'
                    },
                    sideBar: {
                        moduleId: 'sideBar/sponsors'
                    }
                },
                name: 'Events',
                title: 'Events',
                nav: true}, // default route
            {
                route: 'jobs',
                viewPorts: {
                    mainContent: {
                        moduleId: 'jobs/jobs'
                    },
                    sideBar: {
                        moduleId: 'sideBar/adds'
                    }
                },
                title: 'Jobs',
                nav: true
            },
            {
                route: 'discussion',
                viewPorts: {
                    mainContent: {
                        moduleId: 'discussion/discussion'
                    },
                    sideBar: {
                        moduleId: 'sideBar/adds'
                    }
                },
                title: 'Discussion',
                nav: true
            },
            {
                route: 'eventDetail/:eventId',
                viewPorts: {
                    mainContent: {
                        moduleId: 'events/eventDetail'
                    },
                    sideBar: {
                        moduleId: 'sideBar/sponsors'
                    }
                },
                name: 'eventDetail'
            }
        ]);
        this.image = "http://aurelia.io/images/aurelia-logo.png"
    }
}