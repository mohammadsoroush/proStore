import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Outfit } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute={"class"}
          enableSystem
          disableTransitionOnChange
          defaultTheme="light"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
