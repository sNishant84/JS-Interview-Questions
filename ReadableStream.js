class ReadableStream{
    data=[];
    constructor(data){
        this.data=data;
        this.pos=0
    }
    read(size){
        return new Promise((resolve,reject)=>{
            if(this.pos>=this.data.length){
                resolve({value:null,isDone:true})
            }else{
             const result=this.data.slice(this.pos,this.pos+size);
             this.pos=this.pos+size;
             resolve({value:result,isDone:false});
            }
            
          })
        
    }
}

const data=[1,2,3,4,5,6];

const readStream1=new ReadableStream(data);

async function processData(){
    const chunkSize=2;
    let doned=false
    while(!doned){
        let  {value,isDone} = await readStream1.read(chunkSize);
        if(!isDone){
            console.log("data is processing",value)
        }else{
            console.log("data is processed");
            doned=true;
        }
    }
}

processData();
