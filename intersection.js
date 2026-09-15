function intersetion(headA,headB){
    let set=new Set();
    while(headB){
        set.add(headB);
        headB=headB.next
    }
    while(headA){
        if(set.has(headA)){
            return headA;
        }
        headA=headA.next;
    }
    return null;
}


// now with two pointer approach 

first step calculate length of a and b find difference and move the list to that difference check for intersection

function intersection(headA,headB){
    let n=0;
    let pa=headA
    while(headA){
        n++;
        pa=pa.next;
    }
    let m=0;
    let pb=headB
     while(headB){
        m++;
        pb=pb.next;
    }
    let diff=Math.abs(n-m)
    if(n>m){
        temp=headA;
        headA=headB;
        headB=temp
    }
    for(let i=0;i<diff;i++){
        headB=headB.next
    }
    while(pa!=pb){
        pa=pa.next;
        pb=pb.next
    }
    return pa;
}

one more optimised solution is that we can move both pointers from start suppose a reaches null i assigned it to the head of b
and b reaches null i assign it to a so they both start at the same point without difference in length then we can find the answer

function intersection(headA,headB){
    let pa=headA;
    let pb=headB;
    while(pa!=pb){
        pa=pa == null ? headB : pa.next
        pb=pb==null? headA :pb.next
    }
    return pa
}