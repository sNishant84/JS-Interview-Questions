in this we have to find from where first bad version starts.
in this problem since we have to find out from where bad version start so if it is good version we have
to move l=m+1 and for bad version we are not sure so we have to include the mid=right into that also
and we have to search in that place and right should be the answer


function bad(isBadVersion,n){
    let l=1;
    let r=n-1;
    while(l<r){
        let m =Math.floor((l+r)/2);
        if(!bad(m)){
            l=m+1
        }else{
            r=m
        }
    }
    return r;
}


l<=r                  l<r l=m+1 r=m             l<r-1 l=m r=m

l=m+1
r=m-1