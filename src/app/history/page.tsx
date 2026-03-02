
"use client";

import { usePurchases } from "@/hooks/use-purchases";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollText, ShoppingBag, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { format, formatDistanceToNow } from 'date-fns';
import { Badge } from "@/components/ui/badge";
import type { PaymentStatus } from "@/lib/types";
import { cn } from "@/lib/utils";
import { AlgoIcon } from "@/components/icons/AlgoIcon";
import { BeamsBackground } from "@/components/ui/beams-background";

const statusStyles: Record<PaymentStatus, { className: string; icon: React.ReactNode }> = {
    Completed: {
      className: "bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30",
      icon: <CheckCircle className="mr-1.5 h-4 w-4" />,
    },
    Held: {
      className: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30 hover:bg-yellow-500/30",
      icon: <AlertTriangle className="mr-1.5 h-4 w-4" />,
    },
    Failed: {
      className: "bg-red-500/20 text-red-400 border-red-500/30 hover:bg-red-500/30",
      icon: <XCircle className="mr-1.5 h-4 w-4" />,
    },
  };

const PaymentStatusBadge = ({ status }: { status: PaymentStatus }) => {
    if (!status) return null;
    const { className, icon } = statusStyles[status];
    return (
        <Badge variant="outline" className={cn("font-medium backdrop-blur-md", className)}>
            {icon}
            {status}
        </Badge>
    );
};

export default function HistoryPage() {
  const { purchases, isLoaded } = usePurchases();

  return (
    <BeamsBackground>
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex p-4 bg-primary/20 rounded-2xl mb-6 backdrop-blur-xl border border-primary/20">
            <ScrollText className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold font-headline text-white">My Purchases</h1>
          <p className="text-white/60 mt-4 text-lg">
            A record of all your transactions on Vouche.
          </p>
        </div>

        {!isLoaded && (
          <div className="space-y-6">
              <Skeleton className="h-48 w-full rounded-3xl bg-white/5" />
              <Skeleton className="h-48 w-full rounded-3xl bg-white/5" />
              <Skeleton className="h-48 w-full rounded-3xl bg-white/5" />
          </div>
        )}

        {isLoaded && purchases.length === 0 && (
          <Card className="w-full max-w-lg mx-auto text-center py-16 bg-background/40 backdrop-blur-xl border-white/10">
              <CardHeader>
                  <ShoppingBag className="mx-auto h-20 w-20 text-white/20" />
                  <CardTitle className="mt-6 text-white">No Purchases Yet</CardTitle>
                  <CardDescription className="text-white/60">
                      You haven't bought any items yet. Start exploring the marketplace!
                  </CardDescription>
              </CardHeader>
              <CardContent>
                  <Button asChild size="lg" className="px-10">
                      <Link href="/browse">Browse Marketplace</Link>
                  </Button>
              </CardContent>
          </Card>
        )}

        {isLoaded && purchases.length > 0 && (
          <div className="space-y-6">
            {[...purchases].reverse().map((purchase) => (
              <Card key={purchase.transactionId} className="overflow-hidden bg-background/40 backdrop-blur-xl border-white/10 group transition-all hover:border-white/20">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 relative aspect-video sm:aspect-square overflow-hidden">
                     <Image
                          src={purchase.item.imageUrl}
                          alt={purchase.item.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                      />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle className="font-headline text-2xl text-white">{purchase.item.name}</CardTitle>
                                <CardDescription className="text-white/60">
                                    Purchased on {format(new Date(purchase.purchaseDate), "MMMM d, yyyy")}
                                </CardDescription>
                            </div>
                            {purchase.status && <PaymentStatusBadge status={purchase.status} />}
                        </div>
                        
                        <div className="grid gap-3 py-4 border-y border-white/10">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-white/60">Price</span>
                                 <div className="font-bold text-xl text-primary flex items-center gap-1">
                                    <AlgoIcon className="h-5 w-5" />
                                    <span>{purchase.item.price}</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-white/40 font-mono">TX ID</span>
                                <code className="text-white/60 bg-white/5 px-2 py-1 rounded-md">{purchase.transactionId}</code>
                            </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex items-center justify-between gap-4">
                        <Button asChild variant="outline" className="flex-1 bg-white/5 border-white/10 text-white hover:bg-white/10">
                            <Link href={`/item/${purchase.item.id}`}>View Details</Link>
                        </Button>
                        {purchase.status === 'Held' && (
                            <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                                <span className="text-xs text-yellow-400 block font-medium">Auto-release in</span>
                                <span className="text-sm font-bold text-yellow-500">
                                    {formatDistanceToNow(new Date(purchase.purchaseDate))}
                                </span>
                            </div>
                        )}
                      </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </BeamsBackground>
  );
}
