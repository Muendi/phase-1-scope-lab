var customerName = "bob";
customerName();

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob';
}
setBestCustomer();

function overwriteBestCustomer(newCustomer){
    bestCustomer = newCustomer;
} 
setBestCustomer('maybe bob');

const leastFavoriteCustomer = "muendi";
function changeLeastFavoriteCustomer(){
    throw new Error('Assignment to constant variable.')
    leastFavoriteCustomer = "Kyalo";
    return leastFavoriteCustomer;
}
changeLeastFavoriteCustomer();


