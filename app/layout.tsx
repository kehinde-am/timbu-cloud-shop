import React from 'react';
import { Inter } from 'next/font/google';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import './globals.css'; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Timbu | Online store",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ width: '100%', overflowX: 'hidden' }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className + " m-0 p-0 min-w-full"}>
        {children}
        <Subscribe />
        <Footer />
      </body>
    </html>
  );
}
