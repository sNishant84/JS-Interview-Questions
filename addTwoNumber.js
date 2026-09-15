in this problem we have to add two linked list number and we have to also keep track of the carry also
and we have to handle edge cases as well . first we have to run the loop untill we have elements or carry
then we have to also take dummy node to keep track of the nodes added.


function addTwoNumber(l1,l2){
let dummy=new LinkedNode();
let carry=0;
let ans=dummy
while(l1 || l2 || carry){
    let sum=(!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
    carry=Math.floor(sum/10);
    let digit=sum%10;
    let newNode=new LinkedNode(digit);
    dummy.next=newNode;
    l1=l1.next;
    l2=l2.next;
}
return ans.next;
}