import type { Metadata } from "next";
import { Poppins, Dancing_Script} from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const dance_script = Dancing_Script({
  subsets: ["latin"],
});

const pops = Poppins({
  subsets: ["latin"],
  weight: '400',
});


export const metadata: Metadata = {
  title: "NNEGEN",
  description: "Create Faster.Create Smarter",
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
        className={pops.className}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
