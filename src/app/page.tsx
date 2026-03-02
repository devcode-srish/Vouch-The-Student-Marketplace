'use client';

import Hero from "@/components/ui/animated-shader-hero";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="w-full">
      <Hero
        trustBadge={{
          text: "The #1 marketplace for campus life.",
          icons: ["✨"]
        }}
        headline={{
          line1: "AlgoSwap",
          line2: "The student marketplace"
        }}
        subtitle="Trade textbooks, lab gear, and tech securely with your campus community. Powered by Algorand."
        buttons={{
          primary: {
            text: "Get Started",
            onClick: () => router.push('/login')
          },
          secondary: {
            text: "Browse Now",
            onClick: () => router.push('/browse')
          }
        }}
      />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 text-xs font-mono tracking-widest uppercase pointer-events-none z-20">
        Powered by Algorand
      </div>
    </div>
  );
}