function validSudoku(arr){
    let n=9
    let rows = Array.from({ length: 9 }, () => new Set());
  let cols = Array.from({ length: 9 }, () => new Set());
  let boxes = Array.from({ length: 9 }, () => new Set());
    
    for(let row=0;row<arr.length;row++){
      for(let col=0;col<arr[0].length;col++){
        let cell=arr[row][col];
        if(cell=='.'){
          continue
        }
        
        if(rows[row].has(cell)){
          return false
        }
        rows[row].add(cell);
        
        if(cols[col].has(cell)){
          return false;
        }
        cols[col].add(cell);
        let boxIndex = 3 * Math.floor(row / 3) + Math.floor(col / 3);
        if(boxes[boxIndex].has(cell)){
          return false
        }
        boxes[boxIndex].add(cell)
      }
    }
    return true
  }