import { hasDispatch } from '../interfaces/hasDispatch.js'

export class listTemplate{
	constructor( private container: HTMLUListElement){}

	render(type: hasDispatch, heading: string, pos: any){

		const li = document.createElement('li');
		const p = document.createElement('p');
		const h4 = document.createElement('h4');
		h4.innerText = heading
		li.append(h4)
		p.innerText = type.dispatch();
		li.append(p);

		pos = this.container.append(li)
	}
}

// register a list conatiner(ul) in the constructor
// create a render method to render a new 'li' to the container
// --accepts arguments: invoice/payment, a heading, a position
// -- create the html template (li,h4,p)
// -- add 'li' template to tthe start/end of the listTemplate