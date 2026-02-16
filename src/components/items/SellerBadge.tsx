import type { SellerRating } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const ratingStyles: Record<SellerRating, string> = {
  Bronze: "bg-amber-700/20 text-amber-800 border-amber-700/30",
  Silver: "bg-slate-400/20 text-slate-800 border-slate-400/30",
  Gold: "bg-yellow-400/20 text-yellow-800 border-yellow-400/30",
  Platinum: "bg-cyan-400/20 text-cyan-800 border-cyan-400/30",
};

const ratingIconStyles: Record<SellerRating, string> = {
  Bronze: "text-amber-700",
  Silver: "text-slate-500",
  Gold: "text-yellow-500",
  Platinum: "text-cyan-500",
}

export function SellerBadge({ rating, showIcon = false }: { rating: SellerRating, showIcon?: boolean }) {
  if (showIcon) {
    return (
      <Badge variant="outline" className={cn("font-semibold", ratingStyles[rating])}>
        <Star className={cn("w-3 h-3 mr-1 fill-current", ratingIconStyles[rating])} />
        {rating}
      </Badge>
    );
  }
  
  return <span className={cn('text-xs font-medium', ratingIconStyles[rating])}>{rating}</span>;
}
