class Singleton{
    data='';
    constructor(){
        if(!Singleton.instance){
            this.data='intial data';
            Singleton.instance=this;
        }
        return Singleton.instance
    }
    getData(){
        return this.data;
    }
    setData(value){
        return this.data=value;
    }
}

const instance1=new Singleton();
console.log(instance1.getData());
const instance2=new Singleton();
console.log(instance1==instance2)
