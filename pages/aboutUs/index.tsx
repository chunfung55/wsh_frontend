import React from "react";
import "@/styles/Home.module.css";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { getDestinationCategories, getMenu } from "@/services/common";
import WhoWeAre from "./WhoWeAre";
import { CommonPageProps, commonGetStaticProps } from "@/interfaces/common";

const AboutUs = ({ navItems, locale }: CommonPageProps) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <Layout navItems={navItems}>
      <WhoWeAre locale={locale} />
    </Layout>
  );
};

export async function getStaticProps({ locale }: commonGetStaticProps) {
  const [mainMeuns] = await Promise.all([getMenu(locale)]);
  return {
    props: {
      navItems: mainMeuns,
      locale: locale,
    },
  };
}
export default AboutUs;
