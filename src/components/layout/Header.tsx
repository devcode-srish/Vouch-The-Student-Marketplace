"use client";

import Link from "next/link";
import {
  Gift,
  LayoutGrid,
  Menu,
  PackagePlus,
  ScrollText,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { VoucheLogo } from "@/components/icons/VoucheLogo";

const navLinks = [
  { href: "/browse", label: "Browse", icon: LayoutGrid },
  { href: "/sell", label: "Sell", icon: PackagePlus },
  { href: "/rewards", label: "Rewards", icon: Gift },
  { href: "/history", label: "My Purchases", icon: ScrollText },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function Header() {
  const pathname = usePathname();

  const NavLink = ({ href, label, icon: Icon }: { href: string; label: string; icon: React.ElementType }) => (
    <Link
      href={href}
      className={cn(
        "transition-colors hover:text-foreground flex items-center gap-2",
        pathname === href ? "text-foreground font-semibold" : "text-muted-foreground"
      )}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6 z-50">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/browse"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <VoucheLogo />
          <span className="font-bold text-xl font-headline">AlgoSwap</span>
        </Link>
        {navLinks.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/browse"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <VoucheLogo />
              <span className="sr-only">AlgoSwap</span>
            </Link>
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
                <Link href="/register">Register</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}