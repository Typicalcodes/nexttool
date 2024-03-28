"use client"
import React, { useContext, useEffect } from 'react'
import { MyContext } from '../Provider'

export default function Qa() {
    const {Dataqa}= useContext(MyContext);
    useEffect(() => {
        

    }, [])
    
  return (
    <>
    <div className="bg-slate-100 flex  content-center justify-center h-screen w-screen  pt-36">
      <div className="flex flex-col">
        <label type></label>
      

        <button

          className="px-4 py-2 bg-green-500 mt-4 text-white self-start rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
        >
          Submit
        </button>
      </div>
    </div>
  </>

  )
}
