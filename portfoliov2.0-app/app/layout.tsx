import "./globals.css";
import Script from "next/script";
import Navbar from "./(components)/navbar/navbar.comp";
import Footer from "./(components)/footer/footer.comp";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
      <Script
        src="https://kit.fontawesome.com/85d5839673.js"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      ></Script>
    </html>
  );
}
