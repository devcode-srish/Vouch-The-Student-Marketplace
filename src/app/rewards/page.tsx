
"use client";

import { useState } from "react";
import { rewards } from "@/lib/data";
import type { Reward } from "@/lib/types";
import { RewardCard } from "@/components/rewards/RewardCard";
import { Gift, CheckCircle, ArrowLeft } from "lucide-react";
import { AlgoIcon } from "@/components/icons/AlgoIcon";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BeamsBackground } from "@/components/ui/beams-background";

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
      <BeamsBackground>
        <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[calc(100vh-8rem)]">
          <div className="w-full max-w-md text-center">
            <Card className="w-full shadow-2xl p-8 bg-background/80 backdrop-blur-xl border-white/10">
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
                  <Link href="/browse">Back to Marketplace</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </BeamsBackground>
    );
  }

  return (
    <BeamsBackground>
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-16">
          <div className="inline-flex p-4 bg-primary/20 rounded-2xl mb-6 backdrop-blur-xl border border-primary/20">
            <Gift className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-white">
            Vouche Rewards
          </h1>
          <p className="text-lg text-white/60 mt-4">
            Redeem your hard-earned AlgoCoins for exclusive gifts.
          </p>
          <div className="mt-10 inline-flex items-center gap-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-4 shadow-2xl">
            <span className="text-lg font-medium text-white/80">Your Balance:</span>
            <div className="flex items-center gap-2 text-primary font-bold text-3xl">
              <AlgoIcon className="h-8 w-8" />
              <span>{userBalance.toLocaleString()}</span>
            </div>
          </div>
        </header>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
    </BeamsBackground>
  );
}
