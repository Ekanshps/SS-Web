import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saurabh Studio | Capturing Divine Moments",
  description:
    "Where frames come alive. Premium photography and cinematography studio in Ayodhya, India. Specializing in weddings, pre-weddings, events, and commercial photography.",
  keywords: [
    "photography studio",
    "wedding photography",
    "Ayodhya photographer",
    "cinematography",
    "pre-wedding shoot",
    "event photography",
    "Saurabh Studio",
  ],
  authors: [{ name: "DevArea", url: "https://youtube.com/@DevArea" }],
  openGraph: {
    title: "Saurabh Studio | Capturing Divine Moments",
    description:
      "Where frames come alive. Premium photography and cinematography studio in Ayodhya, India.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#0A0A0A] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
