import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nexttool",
  description: "A toll for AI Questions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
      <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
