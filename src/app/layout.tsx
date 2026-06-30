import "./globals.css";
import AuthProvider from "@/providers/auth-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import QueryProvider from "@/providers/query-client-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Elevate Your Exams | ExamShare",
  description:
    "An open-source project for sharing past examination questions in higher education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-pt-16">
      <body className="font-system flex min-h-screen max-w-[100vw] flex-col bg-white text-slate-600 antialiased dark:bg-slate-800 dark:text-slate-300">
        <QueryProvider>
          <AuthProvider>
            <ThemeProvider>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </ThemeProvider>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
