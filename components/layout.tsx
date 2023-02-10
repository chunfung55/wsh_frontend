
import Footer from "./Footer";
import { CommonPageProps } from "@/interfaces/common";
import Head from "next/head";
import React from "react";
import StickyButton from "./stickyButton";
import styles from "./styles";
import Header from "./header";

export default function Layout({ children }: CommonPageProps) {
  return (
    <>
      <Head>
        <title>Wild Senses - Home</title>
      </Head>
      <StickyButton className={styles.upFontCol1}>CONTACT US</StickyButton>
      <Header></Header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
