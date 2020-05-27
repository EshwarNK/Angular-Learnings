class Customer1 {
    private _firstName:string;
    private _lastName:string;

    constructor(theFirst: string, theLast: string){
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    //string is the return type
    public get firstName(): string{
        return this._firstName;
    }

    public set firstName(value: string){
        this._firstName = value;
    }

    public get lastName(): string{
        return this._lastName;
    }

    public set lastName(value: string){
        this._lastName = value;
    }
}

// let's you create an instance
// let myCustomer = new Customer();

// myCustomer.firstName = "Martin";
// myCustomer.lastName = "Dixon";

// console.log(myCustomer.firstName);
// console.log(myCustomer.lastName);

let myCustomer1 = new Customer1("Martin", "Dixon");

console.log(myCustomer1.firstName);
console.log(myCustomer1.lastName);

