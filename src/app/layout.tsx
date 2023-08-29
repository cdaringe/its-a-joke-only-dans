import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OnlyDans™ - Sexy Dudes Doin Sexy Stuff for Zero Bucks",
  description: "Sexy Dudes Doin Sexy Stuff for Zero Bucks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
