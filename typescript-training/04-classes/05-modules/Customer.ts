export class Customer1 {

    constructor(private _firstName: string, private _lastName: string){
    }

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



