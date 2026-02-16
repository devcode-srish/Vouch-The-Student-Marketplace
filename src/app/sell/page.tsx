import { SellForm } from "@/components/sell/SellForm";
import { PackagePlus } from "lucide-react";

export default function SellPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <div className="text-center mb-8">
        <PackagePlus className="mx-auto h-12 w-12 text-primary" />
        <h1 className="text-4xl font-bold font-headline mt-4">List a New Item</h1>
        <p className="text-muted-foreground mt-2">
          Fill out the details below to put your item on the market.
        </p>
      </div>
      <SellForm />
    </div>
  );
}
