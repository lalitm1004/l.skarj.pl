"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Nothing() {

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    setLoading(false);
  }, [])

  // const router = useRouter();
  
  // useEffect(() => {
  //     router.push("/")
  // })
  return (
      <main className={`overflow-hidden flex min-h-screen w-screen justify-center items-center ${(loading) ? "bg-nothing" : "bg-black"}`}>
        <motion.div
          className={`h-[250px] w-[250px] bg-nothing rounded-full z-50`}
          animate={{
            scale: [100 , 0]
          }}
          transition={{
            duration: 0.5
          }}
        />
        <div className="absolute h-screen w-screen flex justify-center items-center">
          <p className="text-white">Hello</p>
        </div>
      </main>
  )
}