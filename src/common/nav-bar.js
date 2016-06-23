import {bindable, customElement, containerless} from 'aurelia-framework';

@containerless()
@customElement('navigation-bar') // use this name for the element instead of 'nav-bar' which is derived from the class name "NavBar"
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