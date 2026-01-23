import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Restyle | Thrift Smarter. Style Better.",
  description:
    "Discover pre-loved fashion, connect with sellers, and build your sustainable wardrobe. Buy, sell, and thrift with purpose. Coming soon.",
  keywords: [
    "thrift",
    "fashion",
    "sustainable",
    "pre-loved",
    "clothing",
    "marketplace",
    "resale",
    "vintage",
  ],
  authors: [{ name: "Restyle" }],
  openGraph: {
    title: "Restyle | Thrift Smarter. Style Better.",
    description:
      "Discover pre-loved fashion, connect with sellers, and build your sustainable wardrobe. Coming soon.",
    type: "website",
    siteName: "Restyle",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restyle | Thrift Smarter. Style Better.",
    description:
      "Discover pre-loved fashion, connect with sellers, and build your sustainable wardrobe. Coming soon.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
