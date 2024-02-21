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
        await streamText(textToStreamIntro);
        await streamText(whatIAm[Math.floor(Math.random() * whatIAm.length)])
        // await new Promise(r => setTimeout(r, 1000));
        const textToStreamOutro = `\n\nwelcome to the l in skarj.pl`
        await streamText(textToStreamOutro);
        await new Promise(r => setTimeout(r, 1000));
        router.push("/main")
      }
      asyncMaster();

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
        <div className={`${loading && "opacity-0"} absolute h-screen w-screen flex flex-col justify-center items-center`}>
          <div className="flex flex-grow justify-center items-center">
            <pre className={`${KodeMono.className} text-white text-xl md:text-6xl`}>
              {display}{(displayCursor && display) ? "|" : " "}
            </pre>
          </div>
        </div>
      </main>
  )
}