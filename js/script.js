//3.a. Define a function (expression) greet returning the value 'Haydo!'.
const greet = ( ) => console.log('Haydo!');

//3.b. Declare a variable salutation. Call the function greet and assign the result of the call to the variable salutation.
var salutation = greet();

//4. Write a function echo that has a parameter called sound and return that passed parameter.
function echo(sound) {
    return sound
}

//5. Write a function greet having a parameter called name. Return 'Hello !' where the parameter variable is concatenated with the ‘Hello’ and ‘!’ strings. 
// +++ I can´t be greet, coz in previous exercises with used. Error. +++
function greetTwo(name) {
    return console.log('Hello ' + name + '!');
}
greetTwo('Nathalie');

//8. Write a function shout that takes a string and returns this string duplicated. In addition, the return should be logged. The call shout('Fire') should return 'FireFire' and should log 'FireFire' for example.
function shout(string) {
    return console.log(string + string);
}
shout('Fire');

//11. Write a function called doSomething with a parameter called name, return the name parameter. On the next line call the function with a value for the name ( can be any name you like ). 
function doSomething(name) {
    return name;
}
console.log(doSomething('Lili'));

//12. Define a function called multiplyFive which accepts a number and returns that number multiplied by 5. 
function multiplyFive(number) {
    return 5 * number;
}
console.log(multiplyFive(5));

/*13. Define a function called myFunction that uses the alert() method with a string value “Hello World!” inside. Call myFunction on the next line. 
function myFunction() {
    alert('Hello World!');
}
myFunction();

NOTE: I can't get this to work. I checked w3schools and forums, it just says to do that. Also, we didn't see this function in class.
*/

//14. Define a variable called isAnswerRight and give it a true value. Use the ternary operator to console.log the ‘The answer is right!’ if the value is true and ‘The answer is wrong!’ if the value is false. 
var isAnswerRight = true;
isAnswerRight ? console.log('The answer is right!') : console.log('The answer is wrong!');

//15. Write a function named tellFortune that: takes 4 arguments: number of children, partner's name, geographic location, job title. Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids." Call that function 3 times with 3 different values for the arguments.
function tellFortune(numberOfChildren, partnerName, geoLocation, jobTitle){
    return console.log('You will be a ' + jobTitle + ' in ' + geoLocation + 
    ',and married to ' + partnerName + ' with ' + numberOfChildren + ' kids.');
} 
tellFortune(4, 'Josephine', 'Vienna', 'Editor');
tellFortune(2, 'Maura', 'New York', 'Chef');
tellFortune(3, 'Emma', 'Freiburg im Breisgau', 'Biotechnologist');






