import Header from "./header";
import Footer from "./footer";
import { CommonPageProps } from "@/interfaces/common";
import Head from "next/head";
import React from "react";

export default function Layout({ children }: CommonPageProps) {
  return (
    <>
      <Head>
        <title>Wild Senses - Home</title>
      </Head>
      <Header></Header>

      <main>{children}</main>
      <Footer />
    </>
  );
}
