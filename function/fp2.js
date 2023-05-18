// "ankit" -> String
// {name:'Ankit'} -> Object
// false -> Boolean
// [] -> Array
// null or undefined -> Please enter a valid number
// 100 -> Number

// Write a function to find the data type of an input

function checkDataType(input){
    for(let key in input){
        if(input[key] === undefined || input[key] === null){
             return "enter valid input";
        }
        else{
            return typeof input[key];
        }
    }
}
console.log(checkDataType({name:'Ankit'}))