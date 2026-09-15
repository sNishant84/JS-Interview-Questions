

function oddEven(head){
     if (!head || !head.next) return head;
    let odd=head;
    let even=head.next;
    let eventStart=head.next

    while(even.next && odd.next){
        odd.next=odd.next.next;
        even.next=even.next.next
        odd=odd.next;
        even=even.next;
    }
    odd.next=evenstart;
    return head
}