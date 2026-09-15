

function balanced(str){
let j=0;
let count=0;
for(let i=0;i<str.length;i++){
   if(str[i]=='R'){
     j++
   }else{
    j--
   }
   if(j==0){
    count++;
   }
}
console.log(count)
}

time complexity=O(N)
space complexiyt=O(1)

we can also do it via map approach as soon as we find r incrrement map and when we encounter L we can decreement