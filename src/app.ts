import { Invoice } from './classes/invoice.js'
import { Payment } from './classes/payment.js'
import { listTemplate} from './classes/listTemplate.js'
import { hasDispatch } from './interfaces/hasDispatch.js'
// interfaces
interface isPerson {
	name: string;
	age: number;
	sex: string;
	speak(a: string): void;
	spend(b: number): number;
}

const rex: isPerson = {
	name: 'Progress Ojemeh',
	age: 23,
	sex: "Male",
	speak(text){
		return text
	},
	spend(cost){
		console.log('spent', cost)
		return cost
	}
}

let whoAreYou = (person: isPerson) => {
	return `${person.name} na ${person.speak('my guy')}`
}
console.log(whoAreYou(rex))

// let docOne: hasDispatch;
// let docTwo: hasDispatch;

// docOne = new Invoice('Emmanuel', '10 bags of rice', 500);
// docTwo = new Payment('Ejiro', '15 gallons of kings oil', 400)

// let docs: hasDispatch[] = []
// docs.push(docOne, docTwo)

// docs.forEach(doc =>{
// 	console.log(doc.dispatch() )
// })

// classes ext

// let invOne = new Invoice('Vee', 'web services', 1000);
// let invTwo = new Invoice('Kester', 'house rent', 500);

// let Invoices: Invoice[] = []

// Invoices.push(invTwo, invOne)

// Invoices.forEach(inv =>{
// 	console.log(inv.client, inv.details, inv.amount, inv.dispatch());
// })

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance

const ul = document.querySelector('ul')!;
const list = new listTemplate(ul)

form.addEventListener('submit', (e: Event) =>{
	e.preventDefault();

	let doc: hasDispatch;
	let values: [string, string, number];

	values = [toFrom.value, details.value, amount.valueAsNumber]

	if (type.value === 'invoice'){
		doc = new Invoice(...values)
	}else{
		doc = new Payment(...values)
	}
	console.log(doc)
	list.render(doc, type.value, null)
	
})
// generics

const addUid = <T>(obj: T) =>{
	let uid = Math.floor(Math.random() * 15)
	return {...obj, uid}
}

let docOne = addUid({name: 'Emmanuel', age: 16})

interface Resources<T> {
	uid: number;
	resourceType: number,
	data: T
}
// ENUMS

enum ResourceType {PERSON, AURHOR, BOOK, VIDEO }
const docTwo: Resources<object> = {
	resourceType: ResourceType.BOOK,
	data: {title: 'half of a yellow sun'},
	uid: Math.floor(Math.random() * 15),
	
}

const docThree: Resources<object> = {
	resourceType: ResourceType.PERSON,
	data: {name: 'Ojemeh Fidelis'},
	uid: Math.floor(Math.random() * 15),
}

console.log(docTwo, docThree)
