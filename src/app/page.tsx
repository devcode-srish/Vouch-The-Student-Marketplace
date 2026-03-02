'use client';

import { ShaderAnimation } from "@/components/ui/shader-animation";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <ShaderAnimation />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4 pointer-events-none">
        <Link 
          href="/login" 
          className="group pointer-events-auto flex flex-col items-center justify-center"
        >
          <h1 className="text-white text-6xl md:text-9xl font-bold font-headline tracking-tighter text-center transition-all duration-700 group-hover:scale-110 group-hover:text-primary floating-text drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Vouch
          </h1>
          <p className="text-white/80 text-xl md:text-3xl mt-6 font-medium tracking-wide text-center transition-all duration-500 group-hover:text-white group-hover:translate-y-2">
            The student marketplace
          </p>
          <div className="mt-16 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-3 rounded-full text-white/60 text-sm font-semibold tracking-widest uppercase animate-pulse transition-all group-hover:bg-primary group-hover:text-white group-hover:border-transparent group-hover:scale-105">
            Click to enter
          </div>
        </Link>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 text-xs font-mono tracking-widest uppercase pointer-events-none">
        Powered by Algorand
      </div>
    </div>
  );
}