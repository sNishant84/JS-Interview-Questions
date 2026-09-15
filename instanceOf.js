function instanceOf(obj,target){
    if(!obj || typeof obj!='object'){
        return false;
    }
    const objProto=Object.getPrototypeOf(obj);
    const targetProto=target.prototype;
    if(objProto==targetProto){
        return true
    }
   return instanceOf(objProto,target);
}

class P{}
class Q extends P{}
const q=new Q();
console.log(instanceOf(q,Q));
console.log(instanceOf(q,P));

function R(){}
console.log(instanceOf(q,R));
R.prototype=Q.prototype
console.log(instanceOf(q,R));
