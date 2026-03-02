"use client";

import { LoginForm } from "@/components/auth/LoginForm";
import Hero from "@/components/ui/animated-shader-hero";
import Link from 'next/link';

export default function LoginPage() {
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
          <div className="bg-background/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center font-headline tracking-tight">Welcome to Vouche</h2>
            <LoginForm />
          </div>
          
          <p className="text-center text-sm text-white/70 bg-black/20 backdrop-blur-sm py-3 px-6 rounded-full inline-block w-full">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="font-semibold text-primary hover:underline">
              Register
            </Link>
          </p>
        </div>
      </Hero>
    </div>
  );
}
