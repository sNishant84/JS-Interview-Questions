// we have to find whether cycle exist in linked list or not. so first approach is using set we maintain a set
// set and check if that element exist or not

function cycle(head){
let curr=head;
let seen=new Set();
while(curr!=null){
    if(seen.has(curr)){
        return true;
    }
    seen.add(curr);
    curr=curr.next
}
return false;
}


optimised approach is to use fast and slow pointer if they have cycle they will meet at some point.

function cycle(head){
    if(!head) return false;

    let slow=head;
    let fast=head.next;
    while(slow!=fast){
        if(fast==null || fast.next==null) return false;
        slow=slow.next;
        fast=fast.next.next;
    }
    return true;
}

time complexity O(N)
space complexity O(1)