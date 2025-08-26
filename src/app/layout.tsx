import type { Metadata } from "next";
import { Anaheim, VT323 } from "next/font/google";
import ThemeSetter from "./ThemeSetter/page";
import "./globals.css";

/*
const anaheimFont = Anaheim({
  variable: "--font-anaheim",
  subsets: ["latin"]
})
*/
const VT323Font = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "brian@portfolio-site",
  description: "Brian Hoang's portfolio website - welcome to my website :D",
  authors:[{name: "Brian Hoang"}],
  creator: "Brian Hoang",
  applicationName: "Brian's Github Portfolio Site",
  robots: {
    index:true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false
    }
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${VT323Font.className} scroll-smooth`}>
      <body className="dark:bg-neutral-900 bg-neutral-200 dark:text-neutral-300 text-neutral-900">
        {children}
      <footer>
        <div>
          <ThemeSetter />
        </div>

      </footer>
      </body>

    </html>
  );
}
