import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://madihamaison.com.br"),

  title: {
    default:
      "Leilão de Diamante Natural 8,06 ct no Rio de Janeiro | Madiha Maison",
    template: "%s | Madiha Maison",
  },

  description:
    "Conheça o Diamante Natural de 8,06 ct da Madiha Maison, com lapidação esmeralda, e saiba como participar do leilão no Rio de Janeiro.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://madihamaison.com.br/",
    siteName: "Madiha Maison",
    title:
      "Leilão de Diamante Natural 8,06 ct no Rio de Janeiro | Madiha Maison",
    description:
      "Conheça o Diamante Natural de 8,06 ct da Madiha Maison e saiba como participar do leilão no Rio de Janeiro.",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Leilão de Diamante Natural 8,06 ct no Rio de Janeiro | Madiha Maison",
    description:
      "Conheça o Diamante Natural de 8,06 ct da Madiha Maison e saiba como participar do leilão.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}