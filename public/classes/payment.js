export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    dispatch() {
        return `${this.recipient} change is £${this.amount} for ${this.details}`;
    }
}
