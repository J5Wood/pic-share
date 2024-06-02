import "./globals.css";
import { Lato } from "next/font/google";
import Header from "./header";
import { ReactNode } from "react";

interface MyProps {
  children?: ReactNode;
}

const lato = Lato({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Pic Share",
  description: "The Image Sharing Site",
};

export default function RootLayout(props: MyProps) {
  const children = props.children;

  return (
    <html lang="en">
      <body className={lato.className}>
        <div className="main-header">
          <a className="main-header-link" href="/">
            <h1>PIC SHARE</h1>
          </a>
        </div>
        <Header />
        <main role="main">{children}</main>
      </body>
    </html>
  );
}
