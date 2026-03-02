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

const statusStyles: Record<PaymentStatus, { className: string; icon: React.ReactNode }> = {
    Completed: {
      className: "bg-green-100 text-green-800 border-green-200 hover:bg-green-100",
      icon: <CheckCircle className="mr-1.5 h-4 w-4" />,
    },
    Held: {
      className: "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-100",
      icon: <AlertTriangle className="mr-1.5 h-4 w-4" />,
    },
    Failed: {
      className: "bg-red-100 text-red-800 border-red-200 hover:bg-red-100",
      icon: <XCircle className="mr-1.5 h-4 w-4" />,
    },
  };

const PaymentStatusBadge = ({ status }: { status: PaymentStatus }) => {
    if (!status) return null;
    const { className, icon } = statusStyles[status];
    return (
        <Badge variant="outline" className={cn("font-medium", className)}>
            {icon}
            {status}
        </Badge>
    );
};

export default function HistoryPage() {
  const { purchases, isLoaded } = usePurchases();

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="text-center mb-8">
        <ScrollText className="mx-auto h-12 w-12 text-primary" />
        <h1 className="text-4xl font-bold font-headline mt-4">My Purchases</h1>
        <p className="text-muted-foreground mt-2">
          A record of all your transactions on Vouche.
        </p>
      </div>

      {!isLoaded && (
        <div className="space-y-4">
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-32 w-full" />
        </div>
      )}

      {isLoaded && purchases.length === 0 && (
        <Card className="w-full max-w-lg mx-auto text-center py-12">
            <CardHeader>
                <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground" />
                <CardTitle className="mt-4">No Purchases Yet</CardTitle>
                <CardDescription>
                    You haven't bought any items yet. Start exploring the marketplace!
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button asChild>
                    <Link href="/browse">Browse Marketplace</Link>
                </Button>
            </CardContent>
        </Card>
      )}

      {isLoaded && purchases.length > 0 && (
        <div className="space-y-6">
          {[...purchases].reverse().map((purchase) => (
            <Card key={purchase.transactionId} className="overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3 relative aspect-video sm:aspect-square">
                   <Image
                        src={purchase.item.imageUrl}
                        alt={purchase.item.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex-1">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                          <div>
                              <CardTitle className="font-headline text-2xl">{purchase.item.name}</CardTitle>
                              <CardDescription>
                                  Purchased on {format(new Date(purchase.purchaseDate), "MMMM d, yyyy 'at' h:mm a")}
                              </CardDescription>
                          </div>
                          {purchase.status && <PaymentStatusBadge status={purchase.status} />}
                      </div>
                    </CardHeader>
                    <CardContent className="grid gap-2">
                         <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Price</span>
                             <div className="font-bold text-lg flex items-center gap-1">
                                <AlgoIcon className="h-4 w-4" />
                                <span>{purchase.item.price}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Transaction ID</span>
                            <code className="text-sm bg-secondary px-2 py-1 rounded-md">{purchase.transactionId}</code>
                        </div>
                        {purchase.status === 'Held' && (
                            <div className="flex justify-between items-center border-t border-dashed mt-2 pt-3">
                                <span className="text-muted-foreground font-medium">Hold Duration</span>
                                <span className="font-bold text-yellow-600">
                                    {formatDistanceToNow(new Date(purchase.purchaseDate))}
                                </span>
                            </div>
                        )}
                    </CardContent>
                    <CardFooter>
                         <Button asChild variant="outline">
                            <Link href={`/item/${purchase.item.id}`}>View Item</Link>
                        </Button>
                    </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
