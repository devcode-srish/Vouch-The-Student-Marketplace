"use client";

import { useState } from "react";
import { rewards } from "@/lib/data";
import type { Reward } from "@/lib/types";
import { RewardCard } from "@/components/rewards/RewardCard";
import { Gift, CheckCircle } from "lucide-react";
import { AlgoIcon } from "@/components/icons/AlgoIcon";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RewardsPage() {
  const [userBalance, setUserBalance] = useState(1250);
  const [justRedeemedReward, setJustRedeemedReward] = useState<Reward | null>(
    null
  );
  const [redeemedIds, setRedeemedIds] = useState<string[]>([]);

  const handleRedeemReward = (reward: Reward) => {
    if (userBalance >= reward.cost) {
      setUserBalance((prevBalance) => prevBalance - reward.cost);
      setJustRedeemedReward(reward);
      setRedeemedIds((prev) => [...prev, reward.id]);
    }
  };

  const handleRedeemMore = () => {
    setJustRedeemedReward(null);
  };

  if (justRedeemedReward) {
    return (
      <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <div className="w-full max-w-md text-center">
          <Card className="w-full shadow-2xl p-8">
            <CheckCircle className="mx-auto h-20 w-20 text-green-500" />
            <CardTitle className="text-3xl font-headline mt-6">
              Reward Redeemed!
            </CardTitle>
            <CardDescription className="mt-2 text-lg">
              You've successfully redeemed{" "}
              <strong>{justRedeemedReward.name}</strong>.
            </CardDescription>
            <CardContent className="mt-6 p-0">
              <p className="text-muted-foreground">
                You will receive an email with redemption details shortly.
              </p>
              <Button
                onClick={handleRedeemMore}
                className="mt-8 w-full"
                size="lg"
              >
                Redeem Another Reward
              </Button>
              <Button asChild variant="outline" className="mt-4 w-full">
                <Link href="/">Back to Marketplace</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <Gift className="mx-auto h-12 w-12 text-primary" />
        <h1 className="text-4xl md:text-6xl font-bold font-headline mt-4">
          AlgoSwap Rewards
        </h1>
        <p className="text-lg text-muted-foreground mt-4">
          Redeem your hard-earned AlgoCoins for exclusive gifts.
        </p>
        <div className="mt-8 inline-flex items-center gap-3 bg-card border rounded-full px-6 py-3">
          <span className="text-lg font-medium">Your Balance:</span>
          <div className="flex items-center gap-2 text-primary font-bold text-2xl">
            <AlgoIcon className="h-6 w-6" />
            <span>{userBalance.toLocaleString()}</span>
          </div>
        </div>
      </header>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {rewards.map((reward) => (
            <RewardCard
              key={reward.id}
              reward={reward}
              userBalance={userBalance}
              onRedeem={handleRedeemReward}
              isRedeemed={redeemedIds.includes(reward.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
