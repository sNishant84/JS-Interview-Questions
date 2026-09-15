import React from 'react'

function useBottomHook() {

    const [isBottom,setBottom]=useState(false);

    useEffect(()=>{
        function handleScroll(){
            const isBottom=document.documentElement.offsetHeight - (document.documentElement.scrollTop + window.innerHeight ) <=10
            setBottom(isBottom)
        }
     window.addEventListener('scroll',handleScroll)
    },[])
      return (
    <div>useBottomHook</div>
  )
}

export default useBottomHook


// innerHeight (window-level)

// 👉 Height of the viewport


// offsetHeight (element-level)

// 👉 Height of a DOM element, including layout stuff

// element.offsetHeight

// Includes ✅

// content height

// padding

// border

// horizontal scrollbar (if present)

// Excludes ❌

// margin
