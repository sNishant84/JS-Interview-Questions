
function Node(val){
    this.val=val;
    this.next=null;
}

function linkedList(){
    this.head=null;
    this.size=0;
}

function addAtHead(val){
 let newNode=new Node(val);
  newNode.next=this.head;
  this.head=newNode;
  this.size++;
}

function addToTail(val){
     let newNode=new Node(val);
    if(this.head==null){
        this.head=newNode
    }
    let curr=this.head
    while(curr.next!=null){
        curr=curr.next;
    }
    curr.next=newNode;
    this.size++;

}

function addAtIndex(index,val){
    if(index < 0 || index>this.size) return
  let newMode=new Node(val)
  if(index==0){
    this.addAtHead(val);
    return
  }
  else if(index==this.size-1){
    this.addToTail(val)
  }
  let curr=this.head;
  let counter=0;
  for(let i=0;i<index-1;i++){
    curr=curr.next
  }
  newNode.next=curr.next;
  curr.next=newNode;
  this.size++;
}

function get(index){
    if(index<0) return -1;
    if(index>this.size-1) return -1;
    let curr=this.head;
    for(let i=0;i<index;i++){
        curr=curr.next;
    }
   return curr;
}

function deleteAtIndex(index){

    if(index<0 || index>=size) return;
    if(index==0){
        this.head=this.head.next;
    }
    let curr=this.head;
    for(let i=0;i<index-1;i++){
        curr=curr.next;
    }
    curr.next=curr.next.next;
    this.size--;
}