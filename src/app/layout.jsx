import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "",
  description: "",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>;
}
