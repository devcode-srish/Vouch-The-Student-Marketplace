
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { items, sellers } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SellerBadge } from "@/components/items/SellerBadge";
import { ShieldCheck, Package, ArrowLeft } from "lucide-react";
import { AlgoIcon } from "@/components/icons/AlgoIcon";
import { BeamsBackground } from "@/components/ui/beams-background";

export default function ItemPage({ params }: { params: { id: string } }) {
  const item = items.find((i) => i.id === params.id);
  if (!item) {
    notFound();
  }
  const seller = sellers.find((s) => s.id === item.sellerId);

  return (
    <BeamsBackground>
      <div className="container mx-auto px-4 py-12">
        <Button variant="ghost" asChild className="mb-8 text-white hover:bg-white/10">
          <Link href="/browse">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Marketplace
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <Card className="overflow-hidden border-white/10 bg-background/50 backdrop-blur-xl">
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
              <h1 className="text-4xl font-bold font-headline text-white">{item.name}</h1>
              <div className="flex items-baseline gap-2 text-primary font-bold text-4xl mt-2">
                <AlgoIcon className="h-8 w-8" />
                <span>{item.price}</span>
              </div>
            </div>
            
            <p className="text-white/80 text-lg leading-relaxed">{item.description}</p>
            
            {seller && (
              <Card className="bg-background/40 backdrop-blur-md border-white/10">
                <CardHeader className="flex flex-row items-center gap-4">
                   <Avatar className="h-16 w-16">
                    <AvatarImage src={seller.avatarUrl} alt={seller.name} />
                    <AvatarFallback className="bg-primary/20 text-white">{seller.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm text-white/60">Sold by</p>
                    <h3 className="text-xl font-semibold text-white">{seller.name}</h3>
                    <div className="mt-1">
                      <SellerBadge rating={seller.rating} showIcon={true}/>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                      <div className="flex items-center gap-2">
                          <Package className="w-4 h-4"/>
                          <span>{seller.successfulOrders} successful orders</span>
                      </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="flex items-center gap-2 text-sm text-white/70 bg-white/5 p-4 rounded-xl border border-white/10">
              <ShieldCheck className="w-5 h-5 text-green-400"/>
              <span>All payments are held securely by Vouche until you confirm the item exchange.</span>
            </div>

            <Button asChild size="lg" className="w-full text-lg py-8 bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/20 transition-all hover:scale-[1.02]">
              <Link href={`/item/${item.id}/buy`}>Buy Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </BeamsBackground>
  );
}
