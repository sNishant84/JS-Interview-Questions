import React from 'react'

function usePreviousHook(value) {
    const ref=useRef();
    useEffect(()=>{
    ref.current=value
    },[value])
  return ref.current
}

export default usePreviousHook

function Counter() {
    const [count, setCount] = useState(0);
  
    // Use the usePrevious hook to get the previous count
    const prevCount = usePrevious(count);
  
    return (
      <div>
        <p>Current Count: {count}</p>
        <p>Previous Count: {prevCount}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }
  

  //useRef survives re-renders, but updating it happens after render.

//   useRef survives re-renders

// ref.current keeps its value across renders without causing re-render.

// useEffect runs after render

// That’s why the returned ref.current is always the “previous” value.

// It updates after the render, so the next render sees the old value.
