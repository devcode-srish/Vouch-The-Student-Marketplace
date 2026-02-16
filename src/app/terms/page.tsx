import { FileText } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const termsSections = [
    {
        title: "1. Acceptance of Terms",
        content: "By accessing or using the AlgoSwap platform, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you may not use our services. These terms apply to all users, including sellers, buyers, and casual browsers."
    },
    {
        title: "2. User Accounts",
        content: "To access certain features, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate. You are responsible for safeguarding your password and for all activities that occur under your account."
    },
    {
        title: "3. Prohibited Activities",
        content: "You agree not to engage in any of the following prohibited activities: (a) listing illegal items; (b) using the platform for any fraudulent purpose; (c) harassing, abusing, or harming another person; (d) infringing upon the intellectual property rights of others; (e) posting false, inaccurate, or misleading content."
    },
    {
        title: "4. Transactions and Payments",
        content: "AlgoSwap facilitates transactions between buyers and sellers but is not a party to any transaction. We use a secure payment holding system where funds are held until the item exchange is confirmed by both parties. AlgoSwap is not responsible for the quality, safety, or legality of items listed."
    },
    {
        title: "5. Termination",
        content: "We may terminate or suspend your account and access to the services at our sole discretion, without prior notice or liability, for any reason, including if you breach these Terms of Service. Upon termination, your right to use the service will immediately cease."
    },
    {
        title: "6. Changes to Terms",
        content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion."
    }
]


export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <header className="text-center mb-12">
        <FileText className="mx-auto h-12 w-12 text-primary" />
        <h1 className="text-4xl font-bold font-headline mt-4">Terms of Service</h1>
        <p className="text-muted-foreground mt-2">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </header>

      <Accordion type="single" collapsible className="w-full">
        {termsSections.map(section => (
            <AccordionItem value={section.title} key={section.title}>
                <AccordionTrigger className="text-lg font-semibold">{section.title}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                    {section.content}
                </AccordionContent>
            </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
