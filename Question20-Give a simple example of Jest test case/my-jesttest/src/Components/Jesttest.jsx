import React from 'react'
import { useState } from 'react'

export const Jesttest = () => {
    //Same as counting only
    const [count , setCount] = useState(0);

  return (
   <>
   {count}
   <button onClick={()=>setCount(count-1)}>-</button>
   <button onClick={()=>setCount(count+1)}>+</button>
   </>
  )
}
