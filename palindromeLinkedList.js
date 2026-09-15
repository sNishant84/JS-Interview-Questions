// first approach is traverse linked list and put those element into array and then check for palidrome in the array


second approach is to find the middle of the linked list and then reverse the half list and then check for the palindrome


function palindromeList(head){
    let slow=head;
    let fast=head;

    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
   let prev=null;
   let curr=slow;

   while(curr){
    let temp=curr.next;
    curr.next=prev;
    prev=curr;
    curr=temp;

   }
  let firstNode=head;
  let lastNode=prev;
  while(lastNode){
    if(firstNode.val!=lastNode.val){
        return false
    }
    firstNode=firstNode.next;
    lastNode=lastNode.next;
  }
  return true;

}

T - O(N)
S - O(1)