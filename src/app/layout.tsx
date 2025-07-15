import type { Metadata } from "next";
import Header from "@/components/header";
import "./globals.css";



export const metadata: Metadata = {
  title: "Community Connect",
  description: "Powering Community Connections",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Header/>
      <body>
        {children}
      </body>
    </html>
  );
}
