import React from "react";
import "@/styles/Home.module.css";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import Layout from "@/components/layout";
import {
  getBanner,
  getDestinationCategories,
  getMenu,
} from "@/services/common";
import WhoWeAre from "./WhoWeAre";
import { CommonPageProps, commonGetStaticProps } from "@/interfaces/common";

const AboutUs = ({ navItems, locale, sliderImgs }: CommonPageProps) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <Layout navItems={navItems} sliderImgs={sliderImgs}>
      <WhoWeAre locale={locale} />
    </Layout>
  );
};

export async function getStaticProps({ locale }: commonGetStaticProps) {
  const [mainMeuns, banner] = await Promise.all([
    getMenu(locale),
    getBanner(locale),
  ]);
  return {
    props: {
      navItems: mainMeuns,
      locale: locale,
      sliderImgs: banner,
    },
  };
}
export default AboutUs;
