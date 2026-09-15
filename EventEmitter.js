class EventEmitter{
    constructor(){
        this.eventListener={}
    }

    on(event,listener){
        if(!this.eventListener[event]){
            this.eventListener[event]=[]

        }
        this.eventListener[event].push(listener)
        return true
    }

    emit(event,...args){
        if(!this.eventListener[event]){
            return false
        }
        this.eventListener[event].forEach((ev)=>ev(...args))

    }
    Off(event,listener){
        if(!this.eventListener[event]){
            return false
        }
        this.eventListener[event]=this.eventListener[event].filter((ev)=>ev!=listener)
    }
    once(event,listener){
        const onceFunction=(...args)=>{
            listener(...args);
            this.Off(event,onceFunction)
        }
        this.on(event,onceFunction)
    }

}

const event=new EventEmitter();
event.on('user:login',()=>console.log("user logged in"))
event.emit('user:login')


 const obj = {
    name:"nishant",
    getName: () => {
        console.log(this.name);
    }
};

console.log(obj.getName())
