import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
import { listTemplate } from './classes/listTemplate.js';
const rex = {
    name: 'Progress Ojemeh',
    age: 23,
    sex: "Male",
    speak(text) {
        return text;
    },
    spend(cost) {
        console.log('spent', cost);
        return cost;
    }
};
let whoAreYou = (person) => {
    return `${person.name} na ${person.speak('my guy')}`;
};
console.log(whoAreYou(rex));
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
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new listTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    console.log(doc);
    list.render(doc, type.value, null);
});
// generics
const addUid = (obj) => {
    let uid = Math.floor(Math.random() * 15);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUid({ name: 'Emmanuel', age: 16 });
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["PERSON"] = 0] = "PERSON";
    ResourceType[ResourceType["AURHOR"] = 1] = "AURHOR";
    ResourceType[ResourceType["BOOK"] = 2] = "BOOK";
    ResourceType[ResourceType["VIDEO"] = 3] = "VIDEO";
})(ResourceType || (ResourceType = {}));
const docTwo = {
    resourceType: ResourceType.BOOK,
    data: { title: 'half of a yellow sun' },
    uid: Math.floor(Math.random() * 15),
};
const docThree = {
    resourceType: ResourceType.PERSON,
    data: { name: 'Ojemeh Fidelis' },
    uid: Math.floor(Math.random() * 15),
};
console.log(docTwo, docThree);
