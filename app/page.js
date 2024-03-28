"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from './api';
import { MyContext } from "./Provider";

export default function Home() {
  const { setqaData   } = useContext(MyContext);
  const router = useRouter();
  const [data, setData] = useState("seema");
  const [text, setText] = useState("");
  const handlesumbit = async () => {
    const da = { text: text };
    try {
      const response = await api.post("/posts", {da});
      const sstring = JSON.stringify(response)
      console.log(typeof sstring)
      setqaData(sstring);
      router.push(`/QA`)
      console.log(response);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <>
      <div className="bg-slate-100 flex  content-center justify-center h-screen w-screen  pt-36">
        <div className="flex flex-col">
          <label type></label>
          <textarea
            style={{
              resize: "vertical",
              width: "52rem",
              maxHeight: "28rem",
              overflow: "auto",
              minHeight: "10rem",
            }}
            className="border p-2 text-green-500 border-green-700 rounded-md focus:border-green-700 focus:outline-none placeholder:text-green-300 "
            value={text}
            rows={50}
            placeholder="Type here"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              handlesumbit();
            }}
            className="px-4 py-2 bg-green-500 mt-4 text-white self-start rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
