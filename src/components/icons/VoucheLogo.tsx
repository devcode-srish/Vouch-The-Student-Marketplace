import { cn } from "@/lib/utils";
import { Repeat } from "lucide-react";

export function VoucheLogo({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-7 w-7", className)}>
        <Repeat className="h-full w-full text-primary" strokeWidth={2.5} />
    </div>
  );
}
