if (!Object.prototype.hasOwnProperty("deepCopy")){
    Object.prototype.deepCopy= function(obj) {
        let copy = Array.isArray(obj) ? []:{};
        for(let key in obj){
            if(typeof obj[key] ==="object"){
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

const deepCopyObj = deepCopy(testObj)
deepCopyObj.details.pincode=208013;
console.log(testObj)
console.log(deepCopyObj)
console.log(testObj.details.pincode)
console.log(deepCopyObj.details.pincode)
const arr =[1,2,3,4,5,6]
console.log(deepCopy(arr))
deepCopyObj.details.person.id=18
console.log(deepCopyObj.details.person.id)
console.log(testObj.details.person.id)
