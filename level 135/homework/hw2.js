function countSmileys(arr) {
    let count = 0;
  
    for (let face of arr) {
      if (face.length === 2) {
        if ((face[0] === ':' || face[0] === ';') && 
            (face[1] === ')' || face[1] === 'D')) {
          count++;
        }
      }
  
  
      else if (face.length === 3) {
        if ((face[0] === ':' || face[0] === ';') &&   
            (face[1] === '-' || face[1] === '~') &&  
            (face[2] === ')' || face[2] === 'D')) {  
          count++;
        }
      }
    }
  
    return count; 
  }
  