"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Main() {

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isCircleIntro, setIsCircleIntro] = useState(false);

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    setIsCircleIntro((localStorage.getItem("everything.skipAnimation") == "true") && localStorage.getItem("everything.sourceMain") == "/")
    setLoading(false);
  }, [])

  return (
    <main className={`overflow-hidden flex w-screen justify-center items-center ${(loading) ? "bg-nothing" : "bg-off-black"}`}>
      <motion.div
        className="flex justify-center items-center h-screen w-screen"
        animate={{
          x: (isCircleIntro ? [0, 0] : [width, 0])
        }}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
      >
        {isCircleIntro && (
          <motion.div 
            className={`h-[250px] w-[250px] bg-nothing rounded-full z-50`}
            animate={{
              scale: [100 , 0]
            }}
            transition={{
              duration: 0.5
            }}
          />
        )}

        <div className={`${loading && "opacity-0"} absolute flex justify-center items-center h-screen w-screen bg-off-black`}>
          <p className="text-white">I will make later :P</p>
        </div>
      </motion.div>
    </main>
  )
}