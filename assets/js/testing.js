/*const speak = function(name = 'luigi', time = 'night'){
    console.log(`good ${time} ${name}`);
};*/


/*const calcArea = function(radius){
    return 3.14 * radius**2;
};*/

/*const bill = function(products, tax) {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}*/

/*const name = 'shaun';

//console.log(bill([10,15,30], 0.2));

const greet = () => 'hello';

let resultOne = greet();
console.log(resultOne);

let resultTwo = name.toUpperCase();
console.log(resultTwo);

const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

myFunc(function(value){
    console.log(value);
});*/

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

people.forEach(function(person, index){
    console.log(index, person);
});