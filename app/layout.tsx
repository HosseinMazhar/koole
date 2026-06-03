import "./globals.css";
import { Vazirmatn } from "next/font/google";
import EmotionRegistry from "../providers/EmotionRegistry";
import ThemeRegistry from "../providers/ThemeRegistry";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="font-sans antialiased">
        <EmotionRegistry>
          <ThemeRegistry>{children}</ThemeRegistry>
        </EmotionRegistry>
      </body>
    </html>
  );
}
