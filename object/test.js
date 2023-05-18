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

const deepCopyObj = Object.deepCopy(testObj)
deepCopyObj.details.pincode=208013;
console.log(testObj)
console.log(deepCopyObj)