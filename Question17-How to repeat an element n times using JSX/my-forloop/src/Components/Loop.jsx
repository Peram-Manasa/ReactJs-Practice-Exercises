import React from 'react'

export const Loop = () => {

    let loop = [];
    for(let i=0;i<=10;i++){
        loop.push(
            <div>
                 inputs:{i}
            </div>
        )
    }
  return (
    <>
    {loop}
    </>
  )
}
