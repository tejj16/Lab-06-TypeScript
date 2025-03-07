namespace Exercise2 {
    export class Customer {
        firstName: string;
        lastName: string;

        constructor() {
            this.firstName = "";
            this.lastName = "";
        }

        greeter() {
            console.log(`Hello, ${this.firstName} ${this.lastName}`);
        }
    }
}

let customer = new Exercise2.Customer();
customer.firstName = "Patel";
customer.lastName = "TejN";
customer.greeter();
