'use client'

import { Inter } from "next/font/google";
import NavBar from "../components/navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter()
  useEffect(() => {
        if(!localStorage.getItem('token'))
            router.push('/login')
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        {<NavBar/>}
        {children}
      </body>
    </html>
  );
}
