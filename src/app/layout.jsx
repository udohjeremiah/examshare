import "./globals.css";
import { Inter, Monoton } from "next/font/google";
import AuthProvider from "@/providers/AuthProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Elevate Your Exams | ExamShare",
  description:
    "An open-source project for sharing past examination questions in higher education",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const monoton = Monoton({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-monoton",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${monoton.variable} flex min-h-screen max-w-[100vw] flex-col bg-white text-slate-600 antialiased dark:bg-slate-800 dark:text-slate-300`}
      >
        <AuthProvider>
          <ThemeProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
