import {Component} from '@angular/core';
import {SaySomething} from "the-library/the-library";

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent {
    constructor() {
        let something: SaySomething = new SaySomething(null);
    }
}
