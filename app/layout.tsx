import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const pageTitle = "Crescent ConneKt — Launching Soon";
const pageDescription =
  "One Crescent. Many Institutions. One Connected Network. Connecting the Crescent ecosystem — education, alumni, business, careers, community and opportunities.";

export const metadata: Metadata = {
  metadataBase: new URL("https://crescentconnekt.com"),
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    type: "website",
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "/og.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#10306E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
