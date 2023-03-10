// import Head from "next/head";
// import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";
import "../styles/Home.module.css";
import { useTranslation } from "next-i18next";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { fetchAPI } from "@/lib/api";

const inter = Inter({ subsets: ["latin"] });

// export const getStaticProps: GetStaticProps = async () => {
//   // 在這裡獲取數據，並返回給 Layout 元件使用
//   const data = { title: "Hello, world!" };
//   const navItemsRespose = await fetchAPI("/navigation/render/main-navigation", {
//     populate: "*",
//   });
//   console.log(navItemsRespose);
//   return {
//     props: { navItemsRespose },
//   };
// };

type Props = {
  // Add custom props here
};

const Home = () =>
  // _props: InferGetStaticPropsType<typeof getStaticProps>
  {
    // const { t } = useTranslation("common");
    // return <>{t("greeting")}</>;
    return <></>;
  };

// export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale ?? "en", ["common"])),
//   },
// });

export default Home;
