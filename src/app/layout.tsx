import Container from "@/components/Container";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tale",
  description: "Tale website version",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container className="flex flex-col gap-3 mt-3">{children}</Container>
      </body>
    </html>
  );
}
