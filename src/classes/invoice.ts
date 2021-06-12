import { hasDispatch } from '../interfaces/hasDispatch.js'

export class Invoice implements hasDispatch {
	constructor(
		public client: string,
		public details: string,
		public amount: number
	){}
	dispatch(){
		return `${this.client} your bill is £${this.amount} for ${this.details}`
	}

}
