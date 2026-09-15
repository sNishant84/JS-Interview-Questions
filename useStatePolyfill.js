let state;

function useOwnState(initialValue){

    const state=useRef(initialValue);
    const[,rerender]=useReducer((x)=>x+1,0);
    if(state.current=='undefined'){
        state.current=initialValue
    }
    const setState=(value)=>{
       if(typeof value=='function'){
        state.current=value(state.current)
       }else{
        state.current=value
       }
       rerender()
    }
    return [state,setState]
}
