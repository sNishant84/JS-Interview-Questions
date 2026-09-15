in this problem w=if we have rotten orange we have to find out in how much time all oranges will be rotten.
so first of all we find the index of all rotten oranges we will also save time with them. then we will move in 4 directions
stored that coordinates in queue also and when we are pushing the next coordinate will also increement the minutes.


function rottenOranges(grid){
   let m=grid.length;
   let n=grid[0].length;
   let queue=[]
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]===2){
               queue.push([i,j,0])
            }
        }
    }
    let maxMin=0
    while(queue.length){
        let [x,y,min]=queue.shift();
        if(x>0 && grid[x-1][y]==1){
            grid[x-1][y]=2;
            queue.push([x-1,y,min+1])
        }
        if(x<m-1 && grid[x+1][y]==1){
            grid[x+1][y]=2;
            queue.push([x+1,y,min+1])
        }
        if(y>0 && grid[x][y-1]==1){
            grid[x][y-1]=2;
            queue.push([x,y-1,min+1])
        }
        if(y<n-1 && grid[x][y+1]==1){
            grid[x][y+1]=2;
            queue.push([x,y+1,min+1])
        }
        maxMin=Math.max(min,maxMin)
    }
      for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]===1){
               return -1
            }
        }
    }
    return maxMin;
}