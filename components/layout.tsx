import Navbar from "./navbar";
import Footer from "./footer";
import { CommonPageProps } from "@/interfaces/common";
import Head from "next/head";
import React from "react";

export default function Layout({ children }: CommonPageProps) {
  return (
    <>
      <Head>
        <title>title</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
