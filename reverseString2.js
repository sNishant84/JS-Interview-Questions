
// in this problem e have to take a pair of 2k we have to reverse k elements
function reverseString(s,k){
s=s.split("");
    for(let i=0;i<s.length;i=i+(2*k)){
     let mid=Math.floor(k/2);
     for(let x=0;x<mid;x++){
       let temp=s[x+i]; // for next iteration we have to jump the pointers so thats why we have plus i in because for 2k it become 4
        s[x+i]=s[i+k-1-x];
        s[i+k-1-x]=temp
     }
    }
    return s.join("")
}


O(n)

Because the inner loop is NOT running n times.

It runs only k/2 times, and k is treated as fixed/smaller compared to n.

So characters are reversed only once overall, not again and again.

space O(n) because converting it into an array


You are still moving through the whole string from start to end.

Even with bigger jumps, the loop work still grows proportionally with string length.

So outer loop is considered:

O(n)

Then inner loop is:

O(k)

Total:

O(n/k)×O(k)

k cancels out:
O(n)

That’s why overall complexity becomes linear.