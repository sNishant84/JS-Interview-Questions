we have to find the middle of the linked list .first approach is traverse the list and push element into array 
and then rturn the middle of it . 

optimised approach is use fast and slow pointer . move the fast pointer by two and slow pointer by one 
the fast pointer reach null the slow will be at middle and for odd fast will be at last 

function middle(head){
    let slow=head;
    let fast=head;

    while(fast && fast.next){
        fast=fast.next.next;
        slow=slow.next
    }

    return slow;
}

loop is running only half n/2 which is equal to n space is O(1)