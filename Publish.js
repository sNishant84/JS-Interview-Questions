class Publisher{
    constructor(){
        this.topics=new Map();
    }

    subscribe(topic,subscriber){
        if(!this.topics.has(topic)){
            this.topics.set(topic,[])
        }
            this.topics.get(topic).push(subscriber)
        return ()=>{
            this.unsubscribe(topic,subscriber)
        }
    }
    unsubscribe(topic,subscriber){
      const subscribers=this.topics.get(topic);
      if(subscribers){
        this.topics.set(topic,subscribers.filter(sub=>sub!=subscriber))
      }
    }
    publish(topic, data) {
        const subscribers = this.topics.get(topic);
        if (subscribers) {
          subscribers.forEach(sub =>
            typeof sub === 'function' ? sub(data) : sub?.update?.(data)
          );
        }
      }
      
      publishAll(data) {
        for (const [, subscribers] of this.topics.entries()) {
          subscribers.forEach(sub =>
            typeof sub === 'function' ? sub(data) : sub?.update?.(data)
          );
        }
      }
    subscribeOnce(topic,subscriber){
        const subscribeOne=(data)=>{
            subscriber?.update(data)
            this.unsubscribe(topic,subscribeOne)
        }
       return this.subscribe(topic,subscribeOne)
    }

    async AsyncSubscribeOnce(topic,subscriber){
        const subscribe= async (data)=>{
            await subscriber?.update(data);
            this.unsubscribe(topic,subscribe)
        }
       return this.subscribe(topic,subscribe)
    }
}

class Subscriber{
    update(data){
        console.log("data is",data)
    }
}


const publisher=new Publisher();
const sub=new Subscriber();
const unsub=publisher.subscribe('login',sub)
publisher.publish('login',{user:'nishant'})
publisher.publish('login',{user:'nishant'})
publisher.publish('login',{user:'sam'})
publisher.subscribeOnce("news", sub);
publisher.publish("news", { headline: "Breaking News: Observer pattern explained!" });
publisher.publish("news", { headline: "Breaking News: Observer pattern explained!" });
