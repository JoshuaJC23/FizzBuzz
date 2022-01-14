var str = document.getElementById("header");
str.textContent = "Hello Everyone this is the FizzBuzz exercise";


for(var i = 0; i <= 100; i++){
    
    if((i % 3 === 0) && (i % 5 === 0)){
        console.log("FizzBuzz");
    } else if(i % 3 === 0){
        console.log("Fizz");
    } else if(i % 5 === 0){
            console.log("Buzz")
    } else {
        console.log(i);
    }

    var newDiv = document.createElement("p");
    newDiv.textContent = i;
    str.appendChild(newDiv);
}

console.log("-----------");

var num = 0;
while(num < 100){
    num += 1;
    if((num % 3 === 0) && (num % 5 === 0)){
        console.log("FizzBuzz");
    } else if(num % 3 === 0){
        console.log("Fizz");
    } else if(num % 5 === 0){
            console.log("Buzz")
    } else {
        console.log(num);
    }
}