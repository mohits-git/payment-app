import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../providers";
import { AppbarClient } from "./_components/appbar-client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Payment App",
  description: "Make Payments to your friends easily.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
        <AppbarClient />
        {children}
        </body>
      </Providers>
    </html>
  );
}
