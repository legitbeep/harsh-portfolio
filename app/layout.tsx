import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const font = Hanken_Grotesk({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harsh Yadav",
  description:
    "Highly adept developer with exceptional logical prowess, capable of crafting elegant solutions to complex problems with precision and efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`relative flex min-h-screen flex-col ${font.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed -z-10 h-screen w-full bg-gradient-to-br from-violet-100 via-teal-50 to-amber-100 dark:hidden"></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
