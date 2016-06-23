import {bindable} from 'aurelia-framework';

export class NavBar {
    @bindable router;
    @bindable image;

    // life-cycle of a custom element
    created(view) {}

    bind(bindingContext, overrideContext) {}

    unbind() {}

    attached() {}

    detached() {}
}