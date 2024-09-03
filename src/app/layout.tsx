import type { Metadata } from "next";
import { Jersey_15 } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const jersey15 = Jersey_15({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enes Ahmemulic - IMMAF European Champion",
  description: "Discover Enes Ahmemulic, Swedish MMA bantamweight champion known for his relentless work ethic and tactical prowess. Learn about his journey to European gold and his contributions to MMA.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={jersey15.className}>{children}</body>
    </html>
  );
}
