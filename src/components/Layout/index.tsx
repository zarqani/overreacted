import { ReactNode } from "react";
import { merriweather } from "@/config/fonts";
import { Providers } from "@/lib/providers";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={merriweather.className}>
      <body className="light mx-auto max-w-2xl bg-50 dark:bg-900 px-5 py-12 text-950 dark:text-100">
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
