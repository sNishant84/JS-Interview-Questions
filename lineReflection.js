function lineReflection(points){
let set = new Set();
let minimum=-Infinity;
let maximum=Infinity;
for(let [x,y] of points){
    set.add(`${x}${y}`)
    minimum=Math.min(minimum,x);
    maximum=Math.max(maximum,x)
}
let sum=minimum+maximun;
for(let [x,y] of points){
    let reflect=`${sum-x}${y}`
  if(!set.has(reflect)){
     return false
  }
}
return true;
}

// in this problem we have to fnd the point which is reflection of each other so we have find a mirror first so 
// suppose 5 is mirror x is 2 distance is 3 for 2 reflection it should be 5+3 which is 8 formula is for reflction 5+5-2
// which is 2c-x for the reflection we have to find the farthest point minx and maxx so to find middle min+max/2
// so c is min+max/2 so 2c is min+max formula becomes min+max-x to calculate the result 3 point can also be true so that for one point itself should mirror