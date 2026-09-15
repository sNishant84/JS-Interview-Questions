let MinStack=function(){
    this.stack=[];
}

MinStack.prototype.push=function(val){
    if(this.stack.length==0){
        this.stack.push([val,val])
    }else{
        let minVal=Math.min([val,this.stack[this.stack.length-1]][1]);
        this.stack.push([val,minVal])
    }

}

MinStack.prototype.pop=function(){
    this.stack.pop();
}

MinStack.prototype.top=function(){
 return   this.stack[this.stack.length-1][0]
}


MinStack.prototype.top=function(){
 return   this.stack[this.stack.length-1][1]
}

in this approach when pushing element in stack calculate min also with val. compare it with the previous min.Math

space complexity - O(N) stroing extra space