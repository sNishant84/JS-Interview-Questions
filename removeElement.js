

function remove(head,val){
    if(!head) return [];
    while(head && head.val==val){
        head=head.next
    }
    let curr=head;
    let prev=null;
    if(head.val==val){
        head=head.next
    }
    while(curr){
        if(curr.val==val){
            prev.next=curr.next;
        }else{
         prev=curr
        }
         curr=curr.next;
    }
}

we can also do this via sentinel node to keep track of the edge Cases
function remove(head,val){
    let sentinel=new LinkedNode();
    sentinel.next=head
    let prev=sentinel;
    while(prev && prev.next){
        if(prev.next.val==val){
           prev.next=prev.next.next
        }else{
            prev=prev.next
        }
    }
 return sentinel.next
}