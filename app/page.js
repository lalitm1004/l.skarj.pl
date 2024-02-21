"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {

  const router = useRouter();
  const [width, setWidth] = useState(0);
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth)
    setLoading(false);
  }, [])


  const handleClick = async () => {
    setClicked(true);
    await new Promise(r => setTimeout(r, 1000))
    router.push("/nothing")
  }

  return (
    <main className=" bg-everything-image bg-cover flex min-h-screen flex-col justify-center items-center">
      <div className="h-screen w-screen absolute flex justify-center items-center">
        <motion.div
          className="w-1/2 h-full bg-black"
          animate={{
            x: [0, -width/2]
          }}
          transition={{
            duration: 4,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="w-1/2 h-full bg-black"
          animate={{
            x:[0, width/2]
          }}
          transition={{
            duration: 4,
            ease: "easeInOut"
          }}
        />

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
          <button onClick={handleClick} className="h-full w-full rounded-full" />
        </motion.div>
      </div>
    </main>
  );
}
