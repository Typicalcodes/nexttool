"use client"
import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../Provider'

export default function Qa() {
    const {Dataqa}= useContext(MyContext);
    const [qaData, setqaData] = useState([])
    useEffect(() => {
        const jsonObject = JSON.parse(Dataqa);
        setqaData(jsonObject.data.questions_and_answers)
console.log(qaData);

    }, [])
    useEffect(() => {
console.log(qaData)
    }, [qaData])
    
    
  return (
    <>
    <div className="bg-slate-100 flex  content-center justify-center h-screen w-screen  pt-36">
      <div className="flex flex-col">
        <label type></label>
      
        {qaData && qaData.map((item,index)=>{
            return <div key={index}><div>
                <h2>{item.question}</h2>
                <h4>{item.answer}</h4>
                </div></div>
        })}
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
