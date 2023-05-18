var myObject = {
     foo: "bar", func: function() {
      var self = this;
    console.log("outer func: this.foo = " + this.foo); // bar
    console.log("outerfunc: self.foo = " + self.foo); // bar 
    (function() {   
        console.log("inner func:this.foo = " + this.foo); // undefined 
        console.log("inner func: self.foo = " +self.foo); // bar
 }()); } }; 
 
 myObject.func();
