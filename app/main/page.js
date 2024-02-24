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
          duration: 0.5,
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
          <div className="h-screen w-screen flex flex-col-reverse md:flex-row">

            <div className="A flex md:flex-col h-1/2 w-full md:h-full md:w-1/2 p-24">
              <div className="flex flex-grow justify-center items-center bg-red-600">
                <p>Projects</p>
              </div>
              <div className="2 flex flex-grow justify-center items-center bg-blue-600">
                <p>Blog?</p>
              </div>
            </div> 
            <div className="B flex h-1/2 w-full md:h-full md:w-1/2 p-24">
              <div className="3 flex flex-grow justify-center items-center bg-green-600">
                <p>skarj.pl</p>
              </div>
            </div>


          </div>
        </div>
      </motion.div>
    </main>
  )
}