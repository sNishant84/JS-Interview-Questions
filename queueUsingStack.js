// implement stack using queue

MyQueue=function(){
    this.s1=[];
    this.s2=[];
}

MyQueue.prototype.enqueue=function(x){
    this.s1.push(x);
}

MyQueue.prototype.dequeue=function(){
    let n=this.s1.length;
    for(let i=0;i<n-1;i++){
        this.s2.push(this.s1.pop());
    }
    let front=this.s1.pop();
    let temp=this.s1;
    this.s1=this.s2;
    this.s2=temp;
    return front
}


MyQueue.prototype.empty=function(){
   return this.s1.length==0;
}

MyQueue.prototype.peek=function(){
    let n=this.s1.length;
    for(let i=0;i<n-1;i++){
        this.s2.push(this.s1.pop());
    }
    let q=this.s1[0];
    this.s2.push(this.s1.pop());
    let temp=this.s1;
    this.s1=this.s2;
    this.s2=temp;
    return q
}



MyQueue.prototype.dequeue=function(){
   if(this.s2.length==0){
    while(this.s1.length){
        this.s2.push(this.s1.pop());
    }
   }
   return this.s2.pop();
}


MyQueue.prototype.peek=function(){
   if(this.s2.length==0){
    while(this.s1.length){
        this.s2.push(this.s1.pop());
    }
   }
   return this.s2[this.s2.length-1];
}


MyQueue.prototype.empty=function(){
   return this.s1.length==0 && this.s2.length==0;
}

