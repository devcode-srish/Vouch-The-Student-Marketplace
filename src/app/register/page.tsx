"use client";

import { RegisterForm } from "@/components/auth/RegisterForm";
import { UserPlus } from "lucide-react";
import Link from 'next/link';
import AnoAI from "@/components/ui/animated-shader-background";

export default function RegisterPage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden">
      <AnoAI />
      
      <div className="container relative z-10 mx-auto max-w-md px-4 py-12">
        <div className="text-center mb-8 bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
          <UserPlus className="mx-auto h-12 w-12 text-primary animate-pulse" />
          <h1 className="text-4xl font-bold font-headline mt-4 text-white">Create an Account</h1>
          <p className="text-white/70 mt-2">
            Join AlgoSwap to start buying and selling in your student community.
          </p>
        </div>
        
        <div className="bg-background/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
          <RegisterForm />
        </div>
        
        <p className="text-center text-sm text-white/70 mt-8 bg-black/20 backdrop-blur-sm py-3 px-6 rounded-full inline-block mx-auto w-full">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}