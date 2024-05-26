import { Josefin_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import "react-loading-skeleton/dist/skeleton.css";

import "./globals.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import "aos/dist/aos.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

library.add(fas, fab);

const josefin_sans = Josefin_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Store",
  description: "designed by Mehdi Mousavipanah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josefin_sans.className}>
        <ThemeProvider>
          <AuthProvider>
            <>
              <Header />
              {children}
              <Footer />
            </>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
