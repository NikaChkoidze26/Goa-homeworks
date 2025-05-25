function assignWithoutDeclaration() {
    undeclaredVar = 42;
  }
  assignWithoutDeclaration();
  
  console.log(undeclaredVar); 
  