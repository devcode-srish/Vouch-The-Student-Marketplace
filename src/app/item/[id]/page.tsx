import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { items, sellers } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SellerBadge } from "@/components/items/SellerBadge";
import { ShieldCheck, Package } from "lucide-react";
import { AlgoIcon } from "@/components/icons/AlgoIcon";

export default function ItemPage({ params }: { params: { id: string } }) {
  const item = items.find((i) => i.id === params.id);
  if (!item) {
    notFound();
  }
  const seller = sellers.find((s) => s.id === item.sellerId);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <Card className="overflow-hidden">
          <div className="aspect-video relative">
            <Image
              src={item.imageUrl}
              alt={item.name}
              fill
              className="object-cover"
              data-ai-hint={item.imageHint}
            />
          </div>
        </Card>
        
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-4xl font-bold font-headline">{item.name}</h1>
            <div className="flex items-baseline gap-2 text-primary font-bold text-4xl mt-2">
              <AlgoIcon className="h-8 w-8" />
              <span>{item.price}</span>
            </div>
          </div>
          
          <p className="text-muted-foreground text-lg">{item.description}</p>
          
          {seller && (
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                 <Avatar className="h-16 w-16">
                  <AvatarImage src={seller.avatarUrl} alt={seller.name} />
                  <AvatarFallback>{seller.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm text-muted-foreground">Sold by</p>
                  <h3 className="text-xl font-semibold">{seller.name}</h3>
                  <div className="mt-1">
                    <SellerBadge rating={seller.rating} showIcon={true}/>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Package className="w-4 h-4"/>
                        <span>{seller.successfulOrders} successful orders</span>
                    </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="w-5 h-5 text-green-500"/>
            <span>All payments are held securely by AlgoSwap until you confirm the item exchange.</span>
          </div>

          <Button asChild size="lg" className="w-full text-lg py-7 bg-accent hover:bg-accent/90">
            <Link href={`/item/${item.id}/buy`}>Buy Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
