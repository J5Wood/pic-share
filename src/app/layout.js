import "./globals.css";
import { Inter } from "next/font/google";

// next/font automatically optimizes Google font.
// Self hosts Google font, no need for browser to request font at load time.
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pic Share",
  description: "The Image Sharing Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
