export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    dispatch() {
        return `${this.client} your bill is £${this.amount} for ${this.details}`;
    }
}
