import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
	constructor() { }

	hello = 'Hello from Angular App with Webpack2';

	ngOnInit() {
		
	}

	ngOnDestroy() {
		
	}
}
