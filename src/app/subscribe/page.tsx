"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const subscriptionPlans = [
    {
        name: "Monthly",
        price: "₹999",
        period: "/month",
        features: ["Access to marketplace", "List up to 50 items", "Standard support"],
        primary: false,
    },
    {
        name: "6 Months",
        price: "₹4,999",
        period: "/6 months",
        features: ["Access to marketplace", "List up to 200 items", "Priority support", "Analytics dashboard"],
        primary: true,

    },
    {
        name: "Yearly",
        price: "₹8,999",
        period: "/year",
        features: ["Access to marketplace", "Unlimited item listings", "24/7 dedicated support", "Advanced analytics"],
        primary: false,

    }
]

export default function SubscribePage() {
    const router = useRouter();
    const { toast } = useToast();

    const handleChoosePlan = (planName: string) => {
        console.log(`Selected plan: ${planName}`);
        toast({
            title: "🎉 Plan Selected!",
            description: "Payment successful. Welcome to Vouche!",
        });
        // Direct to the main marketplace app
        router.push('/browse');
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold font-headline">Choose Your Plan</h1>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                    Select a subscription that best fits your needs to start trading on the Vouche marketplace.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {subscriptionPlans.map(plan => (
                    <Card key={plan.name} className={`flex flex-col ${plan.primary ? 'border-primary border-2 shadow-primary/20 shadow-lg' : ''}`}>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">{plan.name}</CardTitle>
                            <CardDescription>
                                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                                <span className="text-muted-foreground">{plan.period}</span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="space-y-3">
                                {plan.features.map(feature => (
                                    <li key={feature} className="flex items-center gap-3">
                                        <Check className="h-5 w-5 text-green-500" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => handleChoosePlan(plan.name)} className={`w-full ${plan.primary ? '' : 'bg-accent hover:bg-accent/90'}`} size="lg">
                                Choose Plan
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
