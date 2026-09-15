

function sortedList(l1,l2){
    let ans=new LinkedNode();
    let copyAns=ans;
    while(l1 && l2){
        if(l1.val <l2.val){
          ans.next=l1;
          l1=l1.next;
        }else{
          ans.next=l2;
          l2=l2.next;
        }
        ans=ans.next;
    }
    if(l1){
        ans.next=l1
    }else{
        ans.next=l2
    }
    return copyAns.next
}

O(n+m);
O(1)