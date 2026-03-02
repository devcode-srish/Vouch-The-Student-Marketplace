"use client";

import { useState } from "react";
import type { Item, Seller } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Loader2, Info, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from "next/image";

interface PaymentGatewayProps {
  item: Item;
  seller: Seller;
  onPaymentSuccess: () => void;
}

export function PaymentGateway({ item, seller, onPaymentSuccess }: PaymentGatewayProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handlePayConfirmation = () => {
    setIsLoading(true);
    // In a real app, you would poll the blockchain for transaction confirmation.
    // Here, we just simulate a delay.
    setTimeout(() => {
      onPaymentSuccess();
      setIsLoading(false);
    }, 2000);
  };
  
  const amountMicroAlgos = item.price * 1_000_000;
  const note = `Payment for ${item.name} from Vouche`;
  const algorandUrl = `algorand://${seller.address}?amount=${amountMicroAlgos}&note=${encodeURIComponent(note)}`;
  
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=512x512&data=${encodeURIComponent(algorandUrl)}`;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${label} Copied!`,
      description: text,
    });
  };

  return (
    <div className="space-y-6">
      <Alert>
        <Info className="h-5 w-5" />
        <AlertTitle className="font-bold">Scan to Pay with Algorand</AlertTitle>
        <AlertDescription>
          Use a wallet like Pera or Defly to scan the QR code and complete the payment.
        </AlertDescription>
      </Alert>

      <div className="p-2 bg-white rounded-lg border-2 border-dashed">
        <Image src={qrCodeUrl} alt="Algorand payment QR Code" width={512} height={512} className="rounded-md mx-auto" />
      </div>

      <div className="space-y-2 text-sm">
        <p className="text-muted-foreground text-center">
            Or manually send <span className="font-bold text-foreground">{item.price} ALGO</span> to:
        </p>
        <div className="p-3 bg-secondary rounded-md flex items-center justify-between gap-2">
            <code className="break-all text-left text-xs">{seller.address}</code>
            <Button variant="ghost" size="icon" onClick={() => copyToClipboard(seller.address, "Address")}>
                <Copy className="h-4 w-4" />
            </Button>
        </div>
      </div>

      <Button
        onClick={handlePayConfirmation}
        disabled={isLoading}
        className="w-full h-14 text-lg bg-accent hover:bg-accent/90"
        size="lg"
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        ) : (
          `I have paid`
        )}
      </Button>
    </div>
  );
}
