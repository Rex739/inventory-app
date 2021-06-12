import { hasDispatch } from '../interfaces/hasDispatch.js'

export class Payment implements hasDispatch {
	constructor(
		public recipient: string,
		public details: string,
		public amount: number
	){}
	dispatch(){
		return `${this.recipient} change is £${this.amount} for ${this.details}`
	}

}