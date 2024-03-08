import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
