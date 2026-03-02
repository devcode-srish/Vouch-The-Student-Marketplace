"use client";

import { RegisterForm } from "@/components/auth/RegisterForm";
import Hero from "@/components/ui/animated-shader-hero";
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="w-full">
      <Hero
        headline={{
          line1: "",
          line2: ""
        }}
        className="h-screen"
      >
        <div className="w-full max-w-md mx-auto space-y-6">
          <div className="bg-background/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
            <RegisterForm />
          </div>
          
          <p className="text-center text-sm text-white/70 bg-black/20 backdrop-blur-sm py-3 px-6 rounded-full inline-block w-full">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </Hero>
    </div>
  );
}
