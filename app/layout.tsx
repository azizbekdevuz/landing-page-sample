import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "라라머니 – 신용카드 한도로 5분 내 현금 마련",
  description: "신용카드 남은 한도만 있으면 5분 내 입금. 365일 24시간, 간편 본인확인 후 빠르게 상담받으세요.",
  metadataBase: new URL("https://www.example.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "라라머니 – 신용카드 한도로 5분 내 현금 마련",
    description: "신용카드 남은 한도만 있으면 5분 내 입금. 365일 24시간 이용 가능.",
    url: "https://www.example.com/",
    siteName: "라라머니",
    images: [{ url: "/og/og-image.png", width: 1200, height: 630, alt: "라라머니 – 신용카드 한도로 5분 내 현금 마련" }],
    locale: "ko_KR",
    type: "website",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard font */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
        {/* Google Tag Manager */}
        {process.env.NEXT_PUBLIC_GTM_ID ? (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`}
          </Script>
        ) : null}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {process.env.NEXT_PUBLIC_GTM_ID ? (
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
          </noscript>
        ) : null}
        {children}
      </body>
    </html>
  );
}
