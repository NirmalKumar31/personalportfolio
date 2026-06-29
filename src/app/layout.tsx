import { Lora, Source_Serif_4, Caveat } from "next/font/google";
import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";
import "./portfolio.css";
import { Providers, PageTransition } from "@/components";
import Nav from "@/components/Nav";
import TopBar from "@/components/TopBar";
import MobileHeader from "@/components/MobileHeader";
import type { Metadata } from "next";
import { home } from "@/resources";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});
const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-serif",
  display: "swap",
});
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: home.title,
  description: home.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${serif.variable} ${caveat.variable}`}
    >
      <body>
        <Providers>
          <div className="portfolioLayout">
            <Nav />
            <MobileHeader />
            <div className="portfolioRight">
              <TopBar />
              <main className="portfolioMain">
                <PageTransition>{children}</PageTransition>
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
