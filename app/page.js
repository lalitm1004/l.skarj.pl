"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const router = useRouter();
  const [clicked, setClicked] = useState(false);

  const handleClick = async () => {
    setClicked(true);
    await new Promise(r => setTimeout(r, 1000))
    router.push("/nothing")
  }

  return (
    <main className=" bg-everything-image bg-cover bg-center flex min-h-screen flex-col justify-center items-center">
      <div className="h-screen w-screen absolute flex justify-center items-center">
        <div className={`absolute ${(clicked) ? "animate-grow-beyond-size" : "animate-grow-to-size"}`}>
          <button onClick={handleClick} className="w-[250px] h-[250px] bg-nothing rounded-full"></button>
        </div>
        <div className="w-1/2 bg-black h-screen animate-move-left"></div>
        <div className="w-1/2 bg-black h-screen animate-move-right"></div>
      </div>
    </main>
  );
}
