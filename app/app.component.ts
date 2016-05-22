import {Component} from '@angular/core';
import {SaySomething, ShowSomething} from "the-library/the-library";

@Component({
    selector: 'my-app',
    directives: [ShowSomething],
    template: `
        <div>
            <show-something></show-something>
        </div>
    `
})
export class AppComponent {
    constructor() {
        let something: SaySomething = new SaySomething(null);
    }
}
