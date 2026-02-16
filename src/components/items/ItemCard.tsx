import Link from "next/link";
import Image from "next/image";
import type { Item } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { AlgoIcon } from "../icons/AlgoIcon";

export function ItemCard({ item }: { item: Item }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link href={`/item/${item.id}`} className="flex flex-col h-full">
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={item.imageUrl}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={item.imageHint}
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="font-headline text-lg leading-tight">{item.name}</h3>
          <div className="font-bold text-lg text-primary flex items-center justify-center gap-1 mt-1">
            <AlgoIcon className="h-4 w-4" />
            <span>{item.price}</span>
          </div>
        </div>
      </Link>
    </Card>
  );
}
