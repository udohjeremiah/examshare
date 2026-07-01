import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AuthProvider } from "@/providers/auth-provider";
import { DevtoolsProvider } from "@/providers/devtools-provider";
import { QueryProvider } from "@/providers/query-client-provider";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata = {
  description:
    "An open-source project for sharing past examination questions in higher education",
  title: "Elevate Your Exams | ExamShare",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-pt-16" lang="en">
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
        <DevtoolsProvider />
      </body>
    </html>
  );
}
