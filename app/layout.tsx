import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
// check clerk elements later on

export const metadata: Metadata = {
  title: "BrieflyX",
  description: "AI powered talk to videos and pdfs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className='min-h-screen h-screen overflow-hidden flex flex-col'
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
