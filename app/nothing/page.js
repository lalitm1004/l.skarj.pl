"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Nothing() {
  
  // const router = useRouter();
  
  // useEffect(() => {
  //     router.push("/")
  // })
  return (
    <main className="flex min-h-screen justify-center items-center bg-black">
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="absolute bg-nothing w-[250px] h-[250px] rounded-full animate-shrink-from-beyond"></div>
      
        <p className="text-white">Hello</p>
      </div>
    </main>
  )
}