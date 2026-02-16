"use client";

import Image from "next/image";
import type { Reward } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlgoIcon } from "../icons/AlgoIcon";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface RewardCardProps {
  reward: Reward;
  userBalance: number;
  onRedeem: (reward: Reward) => void;
  isRedeemed: boolean;
}

export function RewardCard({
  reward,
  userBalance,
  onRedeem,
  isRedeemed,
}: RewardCardProps) {
  const canAfford = userBalance >= reward.cost;

  const handleRedeem = () => {
    onRedeem(reward);
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={reward.imageUrl}
            alt={reward.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={reward.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <p className="text-sm font-semibold text-primary">{reward.brand}</p>
        <h3 className="font-bold font-headline text-lg leading-tight truncate">
          {reward.name}
        </h3>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              className="w-full bg-accent hover:bg-accent/90"
              disabled={!canAfford || isRedeemed}
              aria-label={
                isRedeemed
                  ? `Reward ${reward.name} already redeemed`
                  : `Redeem ${reward.name} for ${reward.cost} AlgoCoins`
              }
            >
              <div className="flex items-center gap-2">
                {isRedeemed ? (
                  "Redeemed"
                ) : (
                  <>
                    <AlgoIcon className="h-5 w-5" />
                    <span>{reward.cost.toLocaleString()}</span>
                  </>
                )}
              </div>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirm Redemption</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to redeem the{" "}
                <strong>{reward.name}</strong> for{" "}
                <span className="font-bold text-primary inline-flex items-center gap-1">
                  <AlgoIcon className="h-4 w-4" />
                  {reward.cost.toLocaleString()}
                </span>
                ? This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleRedeem}>
                Redeem
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
}
