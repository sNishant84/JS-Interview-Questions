import React from 'react'

function useCopyToClipBoard() {
    const [copyVal,setCopyValue]=useState(null);

    async function copy(val){
        if(!navigator.clipboard){
            console.log('navigator is not present')
        }

        try{
       await navigator.clipboard.writeText(val);
       setCopyValue(val)
        }catch(err){
            console.log(error)
        }
    }
  return [copyVal,copy];
}

export default useCopyToClipBoard


function copyVal(){
    const [inputVal,setInputValue]=useState('')
    const [copyVal,copy]=useCopyToClipBoard()
  return(
   <>
   <input type="text" value={inputVal} onChange={(e)=>setInputValue(e.target.value)} />
   <button onClick={()=>copy(inputVal)}>copy</button>
   </>
  )
    
}

