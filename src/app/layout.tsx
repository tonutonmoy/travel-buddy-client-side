import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers/Providers";
import { Toaster } from "sonner";
import HomeBackgroundAnimation from "@/component/HomeBackgroundAnimation/HomeBackgroundAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} bg-blue-400/10 `}>
          <Toaster position="top-center" />
          <HomeBackgroundAnimation />

          {children}
        </body>
      </html>
    </Providers>
  );
}
