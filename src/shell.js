export class Shell {
    constructor() {}
    configureRouter(config, router) {
        this.router = router;
        config.title = "Olena's App";
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
            }
        ]);
    }
}