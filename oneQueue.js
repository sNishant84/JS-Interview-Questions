MyStack=function(){
    this.q=[];
}

MyStack.prototype.push=function(x){
    this.q.push(x);
}
MyStack.prototype.top=function(){
    let n=this.q.length;
    for(let i=0;i<n-1;i++){
        this.q.push(this.q.shift());
    }
    let top=this.q[0];
    this.q.push(this.q.shift());
    return top;
}

MyStack.prototype.push=function(){
    let n=this.q.length;
    for(let i=0;i<n-1;i++){
        this.q.push(this.q.shift());
    }
    return this.q.shift();
}