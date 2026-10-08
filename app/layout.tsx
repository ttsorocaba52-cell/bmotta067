import type { Metadata } from "next";
import { Anton, Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--ff-display" });
const archivo = Archivo({ subsets: ["latin"], variable: "--ff-body" });
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--ff-mono",
});

export const metadata: Metadata = {
  title: "Bruno Motta — Media Kit 2026",
  description:
    "Media kit de Bruno Motta: car lifestyle e projetos automotivos. +51M de views em 4 redes. Tudo que tem motor.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${archivo.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
