"use client";

import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // Hide navigation on entry, intro and auth screens for a cleaner look
  const hideNav = pathname === "/" || pathname === "/intro" || pathname === "/login" || pathname === "/register";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>Vouche - The Student Marketplace</title>
        <meta name="description" content="A premium student marketplace powered by Algorand." />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            {!hideNav && <Header />}
            <main className="flex-grow">{children}</main>
            {!hideNav && <Footer />}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
