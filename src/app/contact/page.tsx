import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Mail className="mx-auto h-12 w-12 text-primary" />
        <h1 className="text-4xl font-bold font-headline mt-4">Contact Us</h1>
        <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
          Have a question or need support? Reach out and we'll be happy to help.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <ContactForm />
        </div>
        <div className="md:col-span-2 space-y-8">
            <div>
                <h3 className="text-xl font-semibold mb-4 font-headline">Contact Information</h3>
                <p className="text-muted-foreground mb-6">
                    Fill out the form and our team will get back to you within 24 hours.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Mail className="h-5 w-5 text-primary" />
                        <a href="mailto:hello@vouche.app" className="text-muted-foreground hover:text-primary">hello@vouche.app</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">+91 123 456 7890</span>
                    </div>
                    <div className="flex items-start gap-4">
                        <MapPin className="h-5 w-5 text-primary mt-1" />
                        <span className="text-muted-foreground">
                            Vouche Inc.<br/>
                            VIT University, Vellore<br/>
                            Tamil Nadu, 632014
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
