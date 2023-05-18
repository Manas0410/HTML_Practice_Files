if (!Object.prototype.hasOwnProperty("deepCopy")){
    Object.prototype.deepCopy= function(obj) {
        let copy = Array.isArray(obj) ? []:{};
        for(let key in obj){
            if(typeof obj[key] ==="object"){
                console.log(obj[key])
                copy[key]=deepCopy(obj[key]);
            }else{
                copy[key] =obj[key];
            }
        }return copy;
}}

const testObj = {
    name: "Manas",
    age: 20,
    state: "UP",
    details: {
      pincode: 476001,
      isActive: true,
      person:{
        user: "any",
        id:45
      }
    },
  };


const arr =[1,2,3,4,5,6]
console.log(deepCopy(arr))

