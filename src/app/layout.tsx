import type { Metadata } from "next";
import { Cantarell } from "next/font/google";
import "../styles/globals.css";

const font = Cantarell({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andy Sorge - Developer Portfolio",
  description: "A web simulation of Fedora Workstation with the GNOME desktop environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
