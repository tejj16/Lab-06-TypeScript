var Exercise2;
(function (Exercise2) {
    var Customer = /** @class */ (function () {
        function Customer() {
            this.firstName = "";
            this.lastName = "";
        }
        Customer.prototype.greeter = function () {
            console.log("Hello, ".concat(this.firstName, " ").concat(this.lastName));
        };
        return Customer;
    }());
    Exercise2.Customer = Customer;
})(Exercise2 || (Exercise2 = {}));
var customer = new Exercise2.Customer();
customer.firstName = "Patel";
customer.lastName = "Tej";
customer.greeter();
