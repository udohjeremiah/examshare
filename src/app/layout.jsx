import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Elevate Your Exams | ExamShare",
  description:
    "An open-source project for sharing past examination questions in higher education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-pt-16">
      <body className="flex min-h-screen max-w-[100vw] flex-col bg-white font-system text-slate-600 antialiased dark:bg-slate-800 dark:text-slate-300">
        <AuthProvider>
          <ThemeProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
