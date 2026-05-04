import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const snPro = localFont({
  src: [
    {
      path: "../public/fonts/SNPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SNPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/SNPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-snpro",
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Level Up Capital Advisors",
  description: "Professional investment platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${snPro.variable} antialiased`}>
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
