so for this approach we have to take a dummy node we can track of prev to switch the node in pair then only we are
able to swap otherwise it will not.

function adjacent(head){
    if(!head || !head.next) return head;
    let dummy = new LinkedNode();
    dummy.next=head;
    let prev=dummy;
    let curr=head;
    let next=head.next;
    while(curr && next){
        prev.next=next;
        curr.next=next.next;
        next.next=curr;
        prev=curr;
        curr=prev.next;
        next=curr && curr.next
    }
    return dummy.next
}


for recursive solution we have to assume left half is swapped now we have to do it with the first two



function swapPairs(head){
    if(!head || !head.next) return head;

    let l=head;
    let right=head.next;
    l.next=swapPairs(right.next);
    right.next=l;
    return right;
}