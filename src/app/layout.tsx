import { Header } from "@/components/header/Header";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer/Footer";
import { Main } from "@/components/main/Main";
import { Preloader } from "@/components/preloder/Preloader";
import { themes } from "@/constants.ts/themes";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Scent",
  description: "Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Main>{children}</Main>
        <Footer />
        <Preloader />
      </body>
    </html>
  );
}
