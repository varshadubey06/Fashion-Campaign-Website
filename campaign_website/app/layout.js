import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import CartProvider from "../components/CartProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://girlswhobuild.campaign"),
  title: "Girls Who Build — Wear Your Power | The Campaign Collection",
  description:
    "Discover Girls Who Build, a contemporary graphic T-shirt campaign celebrating confidence, creativity, and women building their own futures. Smart. Strong. Unstoppable.",
  keywords: [
    "Girls Who Build",
    "Women in tech",
    "Empowerment fashion",
    "Graphic tees",
    "Luxury streetwear",
    "She Builds the Future",
  ],
  openGraph: {
    title: "Girls Who Build — Wear Your Power",
    description:
      "She doesn't wait for the future. She builds it. Explore the signature editorial collection.",
    url: "https://girlswhobuild.campaign",
    siteName: "Girls Who Build",
    images: [
      {
        url: "/images/hero-campaign.jpg",
        width: 1200,
        height: 675,
        alt: "Girls Who Build the Future Campaign",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FAF8F3] text-[#242126] font-sans antialiased selection:bg-[#9B7AE8]/20 selection:text-[#35163F]">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
