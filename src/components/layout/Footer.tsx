import Link from "next/link";
import { VoucheLogo } from "@/components/icons/VoucheLogo";

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <VoucheLogo />
            <span className="font-bold text-xl font-headline">AlgoSwap</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-foreground">About</Link>
            <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-foreground">Contact</Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AlgoSwap. All rights reserved. Made for students, by students.</p>
        </div>
      </div>
    </footer>
  );
}
