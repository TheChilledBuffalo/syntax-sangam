import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Particles from "@/components/magicui/particles";

const InterFont = Inter({
  subsets: ['latin'],
})
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Syntax Sangam",
  description: "A fun and innovative way to learn coding!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${InterFont.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme={"dark"}
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Particles className={"fixed z-[-10] w-full h-full inset-0"}/>
        </ThemeProvider>
      </body>
    </html>
  );
}
