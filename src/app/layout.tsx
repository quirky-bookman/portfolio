import "./globals.css";
import Image from "next/image";
import { Footer } from "@/components/layout/footer";
import { DesktopProvider } from "@/components/os/desktop";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <DesktopProvider>
      <html lang="uk" suppressHydrationWarning>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </head>
        <body>
          <div className="relative flex min-h-screen flex-col">
            <main className="relative flex-1 p-4">
              <Image src={`${basePath}/bg-03.jpg`} alt="OS Background" fill priority className="object-cover" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10">{children}</div>
            </main>
            <Footer />
          </div>
        </body>
      </html>
    </DesktopProvider>
  );
}
