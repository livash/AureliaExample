import {MyBase} from "MyBase";
import {compute, val2} from "SomeOtherModule";

export class SimpleClass extends MyBase {
	constructor() {
		super();
		this.name = "barney";
	}

	get message() {
		return "Hello ES2015!";
	}

	calculate() {
		return compute();
	}

	startEngine() {
		var promise = new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve("Success using promises!");
			}, 1000);
		});

		return promise;
	}

}