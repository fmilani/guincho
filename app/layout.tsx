import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import Facebook from "./facebook";
import Whatsapp from "./whatsapp";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={inter.className}>
      <head />
      <body className="flex flex-col min-h-screen h-full w-full max-w-4xl mx-auto px-4 bg-gray-100 text-gray-700/[.87]">
        <div className="mt-4 p-4 text-lg font-bold flex items-center rounded-xl drop-shadow-sm bg-white">
          <Link href="/">
            <span className="text-2xl">
              Pelego <span className="text-red-800">Guincho</span>
            </span>
          </Link>
        </div>
        <main className="py-4 flex-1">{children}</main>
        <footer className="flex flex-col gap-2 justify-center items-center border-t mt-4 p-2">
          <span className="text-sm">Entre em contato</span>
          <div className="flex gap-2">
            <Facebook />
            <Whatsapp />
          </div>
        </footer>
      </body>
    </html>
  );
}
