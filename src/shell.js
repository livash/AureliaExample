export class Shell {
    constructor() {}
    configureRouter(config, router) {
        this.router = router;
        config.title = "Olena's App";
        config.map([
            {route: ['', 'events'], moduleId: 'events'} // default route
        ]);
    }
}