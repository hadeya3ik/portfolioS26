import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { RouteTransition } from "@/components/route-transition";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hadeya Ikram",
  description: "Hadeya Ikram",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-background">
        <Analytics />
        <Nav />
        <RouteTransition>{children}</RouteTransition>
      </body>
    </html>
  );
}
