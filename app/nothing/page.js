"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const KodeMono = localFont({
  src: '../../public/fonts/KodeMono.ttf'
})

export default function Nothing() {

  const router = useRouter();

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [loading, setLoading] = useState(true);
  const [everythingRoute, setEverythingRoute] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);

  const [textStreamFinish, setTextStreamFinish] = useState(false);
  
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

      const asyncMaster = async () => {
        
        const streamText = async (string) => {
          for (const letter of string) {
            if (letter === " ") await new Promise(r => setTimeout(r, 200));
            else if (letter === "\n") await new Promise(r => setTimeout(r, 500));
            else await new Promise(r => setTimeout(r, 65))
            
            setDisplay((prevDisplay) => `${prevDisplay}${letter}`)
          }
        }

        const whatIAm = [
          " a developer", " nothing", " everything", // Me
          " not allowed", // Me
          " eccentric", // Pragya
          " resolute", // Malian
          " milk", // Jia
          " yoasobi", // Pustak
          " clear", // Shashwat
        ]
        const textToStreamIntro = `hello, my name is lalit\nand i am`
        const textToStreamOutro = `\n\nwelcome to the l in skarj.pl`

        await streamText(textToStreamIntro);
        await streamText(whatIAm[Math.floor(Math.random() * whatIAm.length)])
        await streamText(textToStreamOutro);
        await new Promise(r => setTimeout(r, 1000));

        setTextStreamFinish(true);
      }
      asyncMaster();

    }, 1000)

  }, [])

  const handleClick = () => {
    localStorage.setItem("everything.skipAnimation", skipAnimation)
    router.push("/main");
  }

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
        <div className={`${loading && "opacity-0"} absolute h-screen w-screen flex flex-col justify-center items-center`}>
          <div className="flex flex-grow justify-center items-center">
            <pre className={`${KodeMono.className} text-white text-xl md:text-6xl`}>
              {display}{(displayCursor && display) ? "|" : " "}
            </pre>
          </div>
          <motion.div
            className="flex flex-shrink flex-col justify-center items-center"
            animate={{
              y: (textStreamFinish) ? [100, 0] : [100]
              // y: [(textStreamFinish ? 50 : 50), (textStreamFinish) ? 0 : 50]
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut"
            }}
          >
              <button onClick={handleClick} className={`${KodeMono.className} bg-white text-off-black text-2xl h-[50px] w-[250px] rounded-full hover:opacity-80 active:opacity-60`}>Go to main page</button>
              <div className="flex gap-1 mb-2">
                <input type="checkbox" onChange={e => setSkipAnimation(e.target.checked)}/>
                <p className={`${KodeMono.className} text-white`}>Skip animation?</p>
              </div>
          </motion.div>
        </div>
      </main>
  )
}