"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {

  const router = useRouter();
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const [loading, setLoading] = useState(true);
  const [curtainsWithdrawn, setCutainsWithdrawn] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setLoading(false);
  }, [])

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setCutainsWithdrawn(true);
      }, 4000)
    }
  }, [loading])

  const handleClick = async () => {
    setClicked(true);
    await new Promise(r => setTimeout(r, 1000))
    router.push("/nothing")
  }

  return (
    <main className={`${loading ? "bg-off-black" : "bg-everything-image"} bg-cover bg-center flex min-h-screen flex-col justify-center items-center`}>
      <div className={`${(height < width) ? "flex flex-row" : "flex flex-col"} h-screen w-screen justify-center items-center`}>
        {/* Curtains */}
        <motion.div
          className={`${(height < width) ? "w-1/2 h-full" : "w-full h-1/2"} bg-off-black`}
          animate={{
            x: (height < width) ? [0, -width/2] : [0, 0],
            y: (height < width) ? [0, 0] : [0, -height/2]
          }}
          transition={{
            duration: 4,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`${(height < width) ? "w-1/2 h-full" : "w-full h-1/2"} bg-off-black`}
          animate={{
            x: (height < width) ? [0, width/2] : [0, 0],
            y: (height < width) ? [0, 0] : [0, +height/2]
          }}
          transition={{
            duration: 4,
            ease: "easeInOut"
          }}
        />
        
        {/* Nothing */}
        <motion.div
          className={`absolute h-[250px] w-[250px] bg-nothing rounded-full ${(loading) && "opacity-0"}`}
          animate={{
            scale: [(clicked ? 1 : 0), (clicked ? 100: 1)]
          }}
          transition={{
            duration: 4,
            ease: "easeInOut"
          }}
        >
          <button onClick={handleClick} className="h-full w-full rounded-full" disabled={!curtainsWithdrawn}/>
        </motion.div>
      </div>
    </main>
  );
}
