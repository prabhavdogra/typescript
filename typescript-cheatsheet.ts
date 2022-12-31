// Typescript #1: Introduction & Setup
	// use "npm install -g typescript" to install typescript

// Typescript #2: Compiling Typescript
	// use "tsc typescript-cheatsheet.ts" to compile typescript to javascript

// Typescript #3: Type Basics
	let c = 'mario';

	// c = 20; -> error
	c = 'luigi';

	const circ = (diameter: number) => {
		return diameter * Math.PI;
	}
	console.log(circ(7.5));

// Typescript #4: Objects & Arrays
	let names = ['luigi', 'mario', 'yoshi'];
	// names = 'hello'; -> error
	names.push('toad');
	// names.push(3); -> error
	// names[0] = 3; -> error

	let numbers = [10, 20, 30, 40];
	// numbers.push('shaun'); -> error
	// numbers.push(true); -> error
	// numbers[1] = 'shaun'; -> error

	let mixedArray = ['ken', 4, 'chun-li', 8, 9];
	mixedArray.push('ryu');
	mixedArray.push(10);
	mixedArray[0] = 3;

	let ninja = {
		name: 'mario',
		belt: 'black',
		age: 30
	};
	// ninja.age = '30'; -> error
	// ninja.skills = ['fighting', 'sneaking']; -> error
	ninja.age = 40;

// Typescript #5: Explicit Types
	let age: number;
	// age = 'luigi'; -> error
	age = 30;

	// arrays
	let ninjas: string[] = [];
	// ninjas = [10, 20, 30]; -> error
	ninjas.push('shaun');

	// union types
	let mixed_: (string|number|boolean)[] = [];
	mixed_.push('hello');
	mixed_.push(20);

	// objects
	let ninjaOne: object;
	ninjaOne = { name: 'yoshi', age: 30 };
	// ninjaOne = { name: 30, age: 'yoshi' }; -> error

// Typescript #6: Dynamic (any) Types
	let age1: any = 25;
	age1 = true;
	console.log(age1);

	let mixed: any[] = [];
	mixed.push(5);
	mixed.push('mario');
	mixed.push(false);
	console.log(mixed);

	let ninja1: { name: any, age: any };
	ninja1 = { name: 'yoshi', age: 25 };
	console.log(ninja1);

	ninja1 = { name: 25, age: 'yoshi' };
	console.log(ninja);

// Typescript #7: Better Workflow & tsconfig
	// We can use "tsconfig.json" to configure typescript settings

// Typescript #8: Function Basics
	let greet: Function;
	// greet = 'hello'; -> error
	greet = () => {
		console.log('hello, again');
	}
	// add = (a: dataTypeOfA, b: dataTypeOfB) : returnType => {
	// Note: "?:" means optional parameter
	const add = (a: number, b: number, c?: number|string):void => {
		console.log(a + b);
		console.log(c);
	}
	add(5, 10);

// Typescript #9: Type Aliases
	type StringOrNum = string | number;
	type userType = { name: string, uid: StringOrNum };

	const logDetails = (uid: StringOrNum, item: string) => {
		console.log(`${item} has a uid of ${uid}`);
	}
	const sayHello = (user: userType) => {
		console.log(`${user.name} says hello`);
	}
	
// Typescript #10: Function Signatures
	// Example 1
	let greet1: Function;
	// greet1 = 'hello'; -> error
	greet1 = () => {
		console.log('hello, again');
	}
	// Example 2
	let calc: (a: number, b: number, c: string) => number;
	calc = (numOne: number, numTwo: number, action: string) => {
		if (action === 'add') {
			return numOne + numTwo;
		} else {
			return numOne - numTwo;
		}
	}
	// Example 3
	type person = {name: string, age: number};
	let logDetails1: (obj: person) => void;
	logDetails1 = (ninja: person) => {
		console.log(`${ninja.name} is ${ninja.age} years old`);
	}
	
// Typescript #11: The DOM & Type Casting
	// See video its about getting DOM elements and typecasting that data

// Typescript #12: Classes
	class Invoice {
		client: string;
		details: string;
		amount: number;

		constructor(c: string, d: string, a: number) {
			this.client = c;
			this.details = d;
			this.amount = a;
		}

		format() {
			return `${this.client} owes $${this.amount} for ${this.details}`;
		}
	}

	const invOne = new Invoice('mario', 'work on the mario website', 250);
	const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

	let invoices: Invoice[] = [];
	invoices.push(invOne);
	invoices.push(invTwo);

	invoices.forEach(inv => {
		console.log(inv.client, inv.amount, inv.format());
	});

// Typescript #13: Public, Private & Readonly
	class Invoice1 {
		// 1
		//readonly client: string;
		//private details: string;
		//public amount: number;

		//constructor(c: string, d: string, a: number) {
		//	this.client = c;
		//	this.details = d;
		//	this.amount = a;
		//}
		//
		// 2: Alternate way for 1
		 constructor(
		 	readonly client: string,
		 	private details: string,
		 	public amount: number
		 ) {}
		format() {
			return `${this.client} owes $${this.amount} for ${this.details}`;
		}
	}
	// public: can be accessed and modified anywhere
	// private: can only be accessed and modified inside the class
	// readonly: can only be accessed inside the class, but not modified

// Typescript #14: Modules
	// ES6 Module System to break code into different modules that can be used later
	// See video to see how to break code (import and export classes and functions) into modules

// Typescript #15: Interfaces
	// An interface is a group of related properties and methods that describe an object, 
	// but neither provides implementation nor initialisation for them.
	export interface IsPerson {
		name: string;
		age: number;
		speak(a: string): void;
		spend(a: number): number;
	}
	const me: IsPerson = {
		name: 'shaun',
		age: 30,
		speak(text: string): void {
			console.log(text);
		},
		spend(amount: number): number {
			console.log('I spent ', amount);
			return amount;
		},
	};
	me.speak('hello, world');
	const greetPerson = (person: IsPerson): void => {
		console.log('hello ', person.name);
	}
	greetPerson(me);

// Typescript #16: Interfaces with Classes
	interface SomeInterface {
		format(): string;
	};
	class curClass implements SomeInterface {
		format() {
			return 'hello';
		}
	}

// Typescript #18: Generics
	// Adds uid to the object with name property
	const addUID = <T extends {name: string}>(obj: T) => {
		let uid = Math.floor(Math.random() * 100);
		return {...obj, uid};
	}
	let docOne = addUID({name: 'yoshi', age: 40});
	console.log(docOne.name);

	// With interfaces
	interface Resource<T> {
		uid: number;
		resourceName: string;
		data: T; // Data type of T
	}
	const data: Resource<string> = {
		uid: 1,
		resourceName: 'person',
		data: 'shaun'
	}

// Typescript #19: Enums
	enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON };
	interface Resource1<T> {
		uid: number;
		resourceType: ResourceType;
		data: T;
	}
	const resOne: Resource1<string> = {
		uid: 1,
		resourceType: ResourceType.BOOK,
		data: 'name of the wind'
	}

// Typescript #20: Tuples
let tup: [string, number, boolean] = ['ryu', 25, true];

// Typescript #21: Wrap Up
	// See video for a summary of what we learned in this course