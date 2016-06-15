import {MyBase} from "MyBase";
export class SimpleClass extends MyBase {
	constructor() {
		super();
		this.name = "barney";
	}

	get message() {
		return "Hello ES2015!";
	}

	calculate() {
		return 42;
	}
}