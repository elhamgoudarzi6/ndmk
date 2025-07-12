import type { Metadata } from "next";
import "@/app/globals.css";
import { Providers } from "@/app/providers";
import { Toaster } from "react-hot-toast";
import Header from "../layout/header";
import Footer from "../layout/footer";
import GoToTop from "../layout/gototop";


export const metadata: Metadata = {
  title: "NDMK AGENCY",
  description: "ndmk agency best for you",
    icons: [
    { rel: "icon", url: "/favicon.ico", type: "image/x-icon" },
    { rel: "icon", url: "/favicon.png", type: "image/png" },
    { rel: "apple-touch-icon", url: "/favicon.png" },
    { rel: "shortcut icon", url: "/favicon.ico" },
  ],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fa">
      <body>
        <Providers>
          <Header />
          <main>
            {children}
            <Toaster position="top-center" />
          </main>
          <GoToTop />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
export default RootLayout;






