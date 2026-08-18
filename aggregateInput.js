const solution = (id) => {
    const parent = document.getElementById(id);
    const inputs = parent.querySelectorAll("input");
    const output = {};
    
    inputs.forEach((e) => {
      const {name, value} = e;
      const pathsArr = name.split(".");
      
      let temp = output;
      pathsArr.forEach((p, index) => {
        if(!(p in temp)){
          temp[p] = {};
        }
        
        if(index === pathsArr.length - 1){
          temp[p] = value;
        }
        
        temp = temp[p];
      });
      
    });
    
    return output;
  }
  
  console.log(solution("parent"));
