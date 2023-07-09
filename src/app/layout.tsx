import { Header } from "@/components/header/Header";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer/Footer";
import { Main } from "@/components/main/Main";
import { Preloader } from "@/components/preloder/Preloader";
import { Provider } from "./provider";
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
        <Preloader />
        <Provider>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
