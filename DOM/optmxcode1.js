function normalUpdate() {
    const startTime = performance.now();
  
    for (let i = 0; i < 100000; i++) {
      const element = document.createElement("p");
      element.textContent = "Hello";
  
      // Updating element everytime on change
      document.body.appendChild(element);
    }
  
    const endTime = performance.now();
    return endTime - startTime;
  
  }
  
  console.log(normalUpdate());
  
  
  
  
  
  
  function batchUpdate() {
    const startTime = performance.now();
  
    // Create batch div container for capturing changes
    const container = document.createElement("div");
  
    for (let i = 0; i < 100000; i++) {
      const element = document.createElement("p");
      element.textContent = "Hello";
      container.appendChild(element);
    }
  
    // Mutating DOM as a batch update
    document.body.appendChild(container);
  
    const endTime = performance.now();
    return endTime - startTime;
  }
  
  console.log(batchUpdate());
  
  
  
  
  
  function fragmentUpdate() {
    // Create batch fragment container for capturing changes
    const container = document.createDocumentFragment();
    const startTime = performance.now();
  
    for (let i = 0; i < 100000; i++) {
      const element = document.createElement("p");
      element.textContent = "Hello";
      container.appendChild(element);
    }
  
    // Mutating DOM as a batch update
    document.body.appendChild(container);
  
    const endTime = performance.now();
    return endTime - startTime;
  }
  
  console.log(fragmentUpdate());