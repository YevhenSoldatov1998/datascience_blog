import type {Metadata} from "next";
import {Inter as FontSans} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/shared/provider";
import {NextIntlClientProvider, useMessages} from 'next-intl';

import {cn} from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Data science blog",
  description: "Your go-to source for data science articles and tutorials.",
};


export default function RootLayout({
                                     children,
                                     params: {locale}
                                   }: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
    <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
