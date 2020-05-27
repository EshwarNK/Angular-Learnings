var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// let's you create an instance
// let myCustomer = new Customer();
// myCustomer.firstName = "Martin";
// myCustomer.lastName = "Dixon";
// console.log(myCustomer.firstName);
// console.log(myCustomer.lastName);
var myCustomer = new Customer("Martin", "Dixon");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
