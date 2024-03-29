"use client";
import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../Provider";

export default function Qa() {
  const { Dataqa } = useContext(MyContext);
  const [qaData, setqaData] = useState([]);

  const [searchterm, setSearchterm] = useState("");

  function handeleqaData(index) {
    const datww = [...qaData];
    datww[index].selected = !datww[index].selected;
    console.log(datww);
    setqaData(datww);
  }

  useEffect(() => {
    const jsonObject = JSON.parse(Dataqa);
    console.log(Dataqa)
    setqaData(jsonObject.data.questions_and_answers);
    console.log(qaData);
  }, []);
  useEffect(() => {
    console.log("scha", qaData);
  }, [qaData]);

  function downloadsearched() {
    const jsonlData = qaData.filter((item) => {
      if (searchterm.length > 0) {
        const search = searchterm.toLowerCase();
        const searchitem = item.question.toLowerCase();
        return search.length && searchitem.includes(search);
      }
      return item;
    }).map((obj) => JSON.stringify(obj))
    .join("\n");
    const blob = new Blob([jsonlData], { type: "application/json" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "data.json";

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
  }
  function handleSelectedDownload() {
    const jsonlData = qaData
      .filter((item) => {
        return item.selected === true;
      })
      .map((obj) => JSON.stringify(obj))
      .join("\n");

    const blob = new Blob([jsonlData], { type: "application/json" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "data.json";

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  return (
    <>
      <div className="bg-slate-100 flex flex-col  content-center justify-center  px-96 pt-36">
        <div className="flex justify-between">
          <button
            onClick={() => {
              handleSelectedDownload();
            }}
            className="border p-2 text-green-400 border-green-700 self-start  my-2 bg-white  rounded-md focus:border-green-700 hover:bg-green-400 hover:text-white hover:font-bold "
          >
            Download Selected item
          </button>
          <button onClick={()=>{downloadsearched()}} className="border p-2 text-green-400 border-green-700 self-start  my-2 bg-white  rounded-md focus:border-green-700 hover:bg-green-400 hover:text-white hover:font-bold ">
            Download Searched Item
          </button>
        </div>
        <div class="relative">
          <input
            type="text"
            value={searchterm}
            onChange={(e) => {
              setSearchterm(e.target.value);
            }}
            placeholder="Search Topics Like AI, Smartphone and Computer"
            class="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold">Questions and Answers (Click to Select)</h1>

          {qaData &&
            qaData
              .filter((item) => {
                if (searchterm.length > 0) {
                  const search = searchterm.toLowerCase();
                  const searchitem = item.question.toLowerCase();
                  return search.length && searchitem.includes(search);
                }
                return item;
              })
              .map((item, index) => {
                return (
                  <div key={index}>
                    <div
                      onClick={() => {
                        handeleqaData(index);
                      }}
                      className={`p-2 m-1  cursor-pointer ${
                        item.selected == true
                          ? "bg-green-600 text-white"
                          : "bg-white text-green-500"
                      } border border-green-500 rounded-md`}
                    >
                      <div>
                        <h2>Q. {item.question}</h2>
                        <h4>A. {item.answer}</h4>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
}
