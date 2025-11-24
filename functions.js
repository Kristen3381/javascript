let temperatures;
let sum;
let meanTemp;
temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
sum = 0;
for (let i = 0; i < temperatures.length; i++) {
     sum += temperatures[i];
}
meanTemp = sum / temperatures.length;
console.log(`mean: ${meanTemp}`); 
temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
sum = 0;
for (let i = 0; i < temperatures.length; i++) {
     sum += temperatures[i];
}
meanTemp = sum / temperatures.length;
console.log(`mean: ${meanTemp}`);  
function getMeanTemp(){
    sum=0;
    for(i=0;i<temperatures.length;i++){
        sum+=temperatures[i];
    }
    meanTemp=sum/temperatures.length;
}
temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
getMeanTemp();
console.log(`mean: ${meanTemp}`);
let name= "Laura";
getName();
function getName(){
    console.log(`Name:${name}`)

}
function showMessage(){
    console.log("message 1");
    return;
    console.log("message 2");
};
showMessage();
function getTrue(){
    return true;
}
 let theTest=getTrue();
 console.log(theTest);
 function adD(first,second){
return first+second;
 }
 let result=adD(4,6);
 console.log(result);
 function getElements(elements,ID){
    return elements[ID];
 }
 let names = ["Alice", "Bob", "Eve", "John"];
let No= getElements(names,1);
console.log(No);
function factorial (n) {
     let result = 1;
     while (n > 1) {
      result *= n;
      n--;
     }
     return result;
}
console.log(factorial(6)); 
function showMessage(message) {
     console.log(`Message: ${message}`);
}
let sm = showMessage;
sm("Hello love");
console.log(typeof sm);
function doNothing() {
     return undefined;
}
let a = doNothing(); 
let b = doNothing;   
console.log(typeof a);
console.log(typeof b); 
function add(a,b){
    return a +b
}
function multiply(a,b){
    return a*b
}
function operation(func,first,second){
return func(first,second);
}
console.log(operation(add, 10, 20))
 let inner = function() {
     console.log('inner 1');
}
let outer = function(callback) {
     console.log('outer 1');
     callback();
     console.log('outer 2');
}
console.log('test 1');
outer(inner);
console.log('test 2'); 