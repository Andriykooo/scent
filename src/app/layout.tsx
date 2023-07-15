import { Header } from "@/components/header/Header";
import { Montserrat } from "next/font/google";
import { Footer } from "@/components/footer/Footer";
import { Main } from "@/components/main/Main";
import { Preloader } from "@/components/preloder/Preloader";
import { Provider } from "./provider";
import "./globals.css";

const mulish = Montserrat({ subsets: ["latin"] });

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
      <body className={mulish.className}>
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
