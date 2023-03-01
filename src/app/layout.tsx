import Buttons from "./(index)/buttons";
import NavBtn from "./(index)/navBtn";
import "./(index)/slick.min.css";
import "./globals.css";
import styles from "./page.module.css";

import { Metadata } from "next";
import { gilroy } from "./(index)/gilroy";
import HelpPopup from "./(index)/helpPopup";
import KeypressNav from "./(index)/keypressNav";
import FramerMotion from "./(index)/motion";

export const metadata: Metadata = {
  title: "Khanh Hoang",
  description:
    "I have primarily worked on data analysis, research, and statistical projects. However, I am keen on attempting product design and development related to websites and mobile apps.",
  themeColor: "#ffffff",
  manifest: "/logo/manifest.json",
  icons: {
    icon: [
      {
        type: "image/png",
        sizes: "192x192",
        url: "/logo/android-icon-192x192.png",
      },
      { type: "image/png", sizes: "32x32", url: "/logo/favicon-32x32.png" },
      { type: "image/png", sizes: "96x96", url: "/logo/favicon-96x96.png" },
      { type: "image/png", sizes: "16x16", url: "/logo/favicon-16x16.png" },
    ],
    apple: [
      { sizes: "57x57", url: "/logo/apple-icon-57x57.png" },
      { sizes: "60x60", url: "/logo/apple-icon-60x60.png" },
      { sizes: "72x72", url: "/logo/apple-icon-72x72.png" },
      { sizes: "76x76", url: "/logo/apple-icon-76x76.png" },
      { sizes: "114x114", url: "/logo/apple-icon-114x114.png" },
      { sizes: "120x120", url: "/logo/apple-icon-120x120.png" },
      { sizes: "144x144", url: "/logo/apple-icon-144x144.png" },
      { sizes: "152x152", url: "/logo/apple-icon-152x152.png" },
      { sizes: "180x180", url: "/logo/apple-icon-180x180.png" },
    ],
  },
  openGraph: {
    title: "Khanh Hoang",
    description:
      "I have primarily worked on data analysis, research, and statistical projects. However, I am keen on attempting product design and development related to websites and mobile apps.",
    url: "https://khanhhd.tect",
    siteName: "Khanh Hoang",
    images: [{ url: "/images/portfolio_screenshot.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gilroy.className}>
        <HelpPopup />
        <div>
          <KeypressNav>
            {/* <OnScrollNav> */}
            <div className={styles.mainBg}>
              <div className={styles.mainCard}>
                <Buttons />
                <NavBtn />
                <FramerMotion>{children}</FramerMotion>
              </div>
            </div>
            {/* </OnScrollNav> */}
          </KeypressNav>
        </div>
      </body>
    </html>
  );
}
