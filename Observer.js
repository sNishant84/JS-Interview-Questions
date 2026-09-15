class Observer{
    update(data){
        console.log("observing",data);
    }
}

class Subject{
    constructor(){
        this.observer=[];
    }
    addObserver(ob){
        this.observer.push(ob);
    }
    removeObserver(ob){
        this.observer=this.observer.filter(obs=>obs!=ob);
    }
    preformAction(data){
        this.notifyObserver(data);
    }
    notifyObserver(data){
        this.observer.forEach((ob)=>ob.update(data))
    }
}

const ob1=new Observer();
const ob2=new Observer();

const subject=new Subject();
subject.addObserver(ob1);
subject.addObserver(ob2);
subject.preformAction('login');
