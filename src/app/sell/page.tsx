
'use client';

import { SellForm } from "@/components/sell/SellForm";
import { PackagePlus } from "lucide-react";
import { BeamsBackground } from "@/components/ui/beams-background";

export default function SellPage() {
  return (
    <BeamsBackground>
      <div className="container mx-auto max-w-2xl px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex p-4 bg-primary/20 rounded-2xl mb-6 backdrop-blur-xl border border-primary/20">
            <PackagePlus className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold font-headline text-white">List a New Item</h1>
          <p className="text-white/60 mt-4 text-lg">
            Fill out the details below to put your item on the market.
          </p>
        </div>
        <div className="bg-background/40 backdrop-blur-xl rounded-3xl p-2 border border-white/10">
          <SellForm />
        </div>
      </div>
    </BeamsBackground>
  );
}
