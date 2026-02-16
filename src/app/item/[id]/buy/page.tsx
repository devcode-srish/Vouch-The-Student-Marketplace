"use client";

import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import { items, sellers } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PaymentGateway } from "@/components/shared/PaymentGateway";
import { ArrowLeft, QrCode } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePurchases } from "@/hooks/use-purchases";
import { AlgoIcon } from "@/components/icons/AlgoIcon";

export default function BuyPage() {
  const params = useParams<{ id: string }>();
  const item = items.find((i) => i.id === params.id);
  const [isPaid, setIsPaid] = useState(false);
  const [transactionId, setTransactionId] = useState<string | null>(null);
  const { addPurchase } = usePurchases();

  if (!item) {
    notFound();
  }
  const seller = sellers.find((s) => s.id === item.sellerId);

  if (!seller) {
    // Or handle this case more gracefully
    notFound();
  }
  
  const handlePaymentSuccess = () => {
    // Create a unique ID for the transaction confirmation
    const uniqueId = `TXN-${item.id}-${Date.now()}`;
    setTransactionId(uniqueId);
    setIsPaid(true);
    addPurchase(item, uniqueId);
  };
  
  if (isPaid && transactionId) {
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=512x512&data=${encodeURIComponent(transactionId)}`;
    
    return (
        <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <div className="w-full max-w-md text-center">
          <Card className="w-full shadow-2xl p-8">
            <QrCode className="mx-auto h-20 w-20 text-primary" />
            <CardTitle className="text-3xl font-headline mt-6">Confirm Exchange</CardTitle>
            <CardDescription className="mt-2 text-lg">
              Show this QR code to the seller to receive your item.
            </CardDescription>
            <CardContent className="mt-6 p-0 space-y-6">
                <div className="p-4 bg-white rounded-xl border-2 border-dashed">
                    <Image src={qrCodeUrl} alt="Transaction Confirmation QR Code" width={512} height={512} className="rounded-lg mx-auto" />
                </div>
              <p className="text-muted-foreground text-sm">
                Once the seller scans this code, the payment of <span className="font-bold text-foreground inline-flex items-center gap-1"><AlgoIcon className="h-4 w-4" /> {item.price}</span> will be transferred to them.
              </p>
              <Button asChild className="w-full" size="lg">
                <Link href="/">Back to Marketplace</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <div className="w-full max-w-md">
        <Button variant="ghost" asChild className="mb-4">
          <Link href={`/item/${item.id}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to item
          </Link>
        </Button>
        <Card className="w-full shadow-2xl">
          <CardHeader>
            <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-md overflow-hidden">
                    <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                    <CardTitle className="text-2xl font-headline">{item.name}</CardTitle>
                    <CardDescription>Sold by {seller?.name}</CardDescription>
                </div>
            </div>
            <div className="flex items-baseline justify-center gap-2 text-primary font-bold text-5xl pt-4">
              <AlgoIcon className="h-10 w-10" />
              <span>{item.price}</span>
            </div>
          </CardHeader>
          <CardContent>
            <PaymentGateway item={item} seller={seller} onPaymentSuccess={handlePaymentSuccess} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
