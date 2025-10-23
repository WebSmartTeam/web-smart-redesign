import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Web-Smart.Co | Best SEO Agency in Hertfordshire",
  description: "Leading digital marketing and web design agency in Hitchin, Hertfordshire. Specialising in SEO, web design, content writing, and Google Ads management.",
  keywords: "SEO Hertfordshire, web design Hitchin, digital marketing, Google Ads, content writing",
  authors: [{ name: "Web-Smart.Co" }],
  openGraph: {
    title: "Web-Smart.Co | Best SEO Agency in Hertfordshire",
    description: "Leading digital marketing and web design agency in Hitchin, Hertfordshire.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
