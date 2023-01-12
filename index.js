function receivesAFunction(parameter) {
    parameter();

    return "Recieved Callback Function";

}

function Spy() {
    console.log("spying");
}


function returnsANamedFunction() {

    return function namedFunction() {console.log('named function')};
}

function returnsAnAnonymousFunction(){
    return function() {console.log('anonymous function')};
}