import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/mainHeader/Header";
import {mainMetaData} from "@/constants/metaData";
import Footer from "@/components/mainFooter/Footer";
import React from "react";

export const metadata: Metadata = mainMetaData;



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" translate="no">
    <head>
      <meta httpEquiv="Content-Type" content="text/html;charset=utf-8"/>
      <title>بامن24</title>
    </head>
    <body>
    <Header/>
    {children}
    <Footer />
    </body>
    </html>
  );
}
