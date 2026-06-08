import { Metadata } from "next";
import "./globals.css";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "اپلیکیشن آموزشی کوله",
  description:
    "با کوله، دانش‌آموزان معلم‌های مورد علاقه‌شان را دنبال می‌کنند، در آزمون‌های پایه شرکت می‌کنند و معلمان درسنامه منتشر کرده و دانش‌آموزان را ارزیابی می‌کنند",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.className} antialiased`}>{children}
        <p>سلام</p>
      </body>
    </html>
  );
}
