first approach is to first calculate the length of list then i have to delete from the last. 
so formula becomes - length-n + 1 because it points to prev. so when we have to delete element we can use
sentinel. so for prev =length-n


function nthNode(head,n){
    let sentinel=new LinkedNode();
    let length=0;
    while(head){
       length++;
       head=head.next;
    }
    sentinel.next=head;
    let prevPos=length-n;
    let prev=sentinel
    for(let i=0;i<prevPos;i++){
        prev=prev.next
    }
    prev.next=prev.next.next;
    return sentinel.next;
}

t - O(n)
s-O(1)


optimised approach - one pass

now to do in the one pass we have to use two pointer approach first pointer from senitel and the next is from +n
then the second reaches last then first will be at previous.

function nthNode(head,n){
    let senitel=new LinkedNode();
    senitel.next=head;
   let fast=senitel;
   for(let i=0;i<n;i++){
    fast=fast.next
   }
   let slow=senitel
    while(fast.next){
        slow=slow.next;
        fast=fast.next;
    }
    slow.next=slow.next.next;
    return sentinel.next

}