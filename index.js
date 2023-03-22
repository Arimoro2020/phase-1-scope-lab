
var  customerName = 'bob';
const LeastFavoriteCustomer = "Dilly"

function  upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}

function  overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

function  changeLeastFavoriteCustomer(){
    LeastFavoriteCustomer = 'Undilly';
    return LeastFavoriteCustomer;
}