import "./globals.css";
import Image from "next/image";
import { Footer } from "@/components/layout/footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body>
        <div className="relative flex min-h-screen flex-col">
          <main className="relative flex-1 p-4">
            <Image src="/bg-01.jpg" alt="OS Background" fill priority quality={100} className="object-cover" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
