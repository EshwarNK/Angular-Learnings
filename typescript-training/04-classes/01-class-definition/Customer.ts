class Customer {
    firstName:string;
    lastName:string;

    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

// let's you create an instance
// let myCustomer = new Customer();

// myCustomer.firstName = "Martin";
// myCustomer.lastName = "Dixon";

// console.log(myCustomer.firstName);
// console.log(myCustomer.lastName);

let myCustomer = new Customer("Martin", "Dixon");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

