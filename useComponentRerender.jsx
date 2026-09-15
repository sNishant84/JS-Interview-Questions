import React from 'react'

function useComponentRerender(data) {

    const prevData=useRef();
    useEffect(()=>{
       if(prevData.current){
        const allKeys=[...Object.keys(prevData.current),...Object.keys(data)];
        const changedObject={};
        for(let i=0;i<allKeys.length;i++){
            let key=allKeys[i]
            if(prevData.current[key]!=data[key]){
                changedObject[key]={
                    from:prevData.current[key],
                    to:data[key]
                }
            }
        }
        if(Object.keys(changedObject)){
            console.log("compoent rerenders");
        }
       }
       

    })
  return (
    <div>useComponentRerender</div>
  )
}

export default useComponentRerender
