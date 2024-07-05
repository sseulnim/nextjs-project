import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "포켓몬 도감",
  description: "나만의 포켓몬 도감",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-gray-100`}>
        <header className="w-full h-[60px] bg-teal-500 text-center flex items-center justify-center">
          <h2 className="text-white font-bold text-xl">
            나만의 포켓몬 리스트 도감
          </h2>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="w-full h-[60px] bg-teal-500 text-center flex items-center justify-center">
          <p className="text-white text-sm">
            © 2024 포켓몬 도감. 모든 권리 보유.
          </p>
        </footer>
      </body>
    </html>
  );
}
