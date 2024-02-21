"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const KodeMono = localFont({
  src: '../../public/fonts/KodeMono.ttf'
})

export default function Nothing() {

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [loading, setLoading] = useState(true);

  const [display, setDisplay] = useState("");
  const [displayCursor, setDisplayCursor] = useState(false);

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    setLoading(false);
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayCursor((prev) => !prev);
    }, 500)

    return () => clearInterval(intervalId);
  })

  useEffect(() => {

    setTimeout(() => {
      const streamText = async (string) => {
        for (const letter of string) {
          if (letter === " ") await new Promise(r => setTimeout(r, 200));
          else await new Promise(r => setTimeout(r, 65))
          
          setDisplay((prevDisplay) => `${prevDisplay}${letter}`)
        }
      }
      streamText("hello, i am lalit");

    }, 1000)

  }, [])

  return (
      <main className={`overflow-hidden flex min-h-screen w-screen justify-center items-center ${(loading) ? "bg-nothing" : "bg-off-black"}`}>
        <motion.div 
          className={`h-[250px] w-[250px] bg-nothing rounded-full z-50`}
          animate={{
            scale: [100 , 0]
          }}
          transition={{
            duration: 0.5
          }}
        />
        <div className={`${loading && "opacity-0"} absolute h-screen w-screen flex justify-center items-center`}>
          <pre className={`${KodeMono.className} text-white text-2xl md:text-7xl`}>
            {display}{(displayCursor && display) ? "|" : " "}
          </pre>
        </div>
      </main>
  )
}