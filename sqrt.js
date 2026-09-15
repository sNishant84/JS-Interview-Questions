// if my number is less than 2 then the squaare root is itself is that number. otherwise number will go till x/2
this solution is perfectly valid for perfect square for not perfect r is the value which is closet to that.
so suppose x is 16 then we will run our loop from 2 to 8 because it lies in half of its value.
function sqrt(x){
  if(x<2) return x;
  let l=2;
  let r=Math.floor(x/2)
  while(l<r){
    let m=Math.floor((l+r)/2);
    if(x==m**2) return m;
    else if(x<m**2){
        r=m-1;
    }else{
      l=m+1
    }
  }
  return r
}