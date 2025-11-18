import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../contexts/AuthContext";

export const metadata: Metadata = {
  title: "AVB | Aço Verde do Brasil",
  description: "Formulario AVB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        <AuthProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Toaster position="top-center" reverseOrder={false} />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
