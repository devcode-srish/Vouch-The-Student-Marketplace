import { Shield } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const privacySections = [
    {
        title: "1. Information We Collect",
        content: "We collect information you provide directly to us, such as when you create an account, list an item, or communicate with other users. This may include your name, email address, university affiliation, and any other information you choose to provide. We also collect transaction details and log information about your use of the services."
    },
    {
        title: "2. How We Use Your Information",
        content: "We use the information we collect to provide, maintain, and improve our services. This includes facilitating transactions, resolving disputes, providing customer support, and communicating with you about products, services, and events. We may also use the information to monitor and analyze trends, usage, and activities in connection with our services."
    },
    {
        title: "3. Information Sharing",
        content: "We do not share your personal information with third parties except as described in this policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf. We may also share information in response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process."
    },
    {
        title: "4. Data Security",
        content: "We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. We use a secure payment gateway and hold payments until transactions are confirmed to protect both buyers and sellers on Vouche."
    },
    {
        title: "5. Your Choices",
        content: "You may update, correct, or delete information about you at any time by logging into your online account. If you wish to delete your account, please contact us, but note that we may retain certain information as required by law or for legitimate business purposes."
    },
    {
        title: "6. Children's Privacy",
        content: "Our services are not directed to individuals under 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information."
    }
]


export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <header className="text-center mb-12">
        <Shield className="mx-auto h-12 w-12 text-primary" />
        <h1 className="text-4xl font-bold font-headline mt-4">Privacy Policy</h1>
        <p className="text-muted-foreground mt-2">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </header>

      <Accordion type="single" collapsible className="w-full">
        {privacySections.map(section => (
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
