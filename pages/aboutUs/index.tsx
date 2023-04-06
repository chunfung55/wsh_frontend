import React from "react";
import "@/styles/Home.module.css";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { getDestinationCategories, getMenu } from "@/services/common";
import WhoWeAre from "./WhoWeAre";

const AboutUs = ({ navItems, destinationCategories }) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <Layout navItems={navItems}>
      <WhoWeAre />
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  const [mainMeuns, destinationCategories] = await Promise.all([
    getMenu(locale),
    getDestinationCategories(),
  ]);
  return {
    props: {
      navItems: mainMeuns,
      destinationCategories: destinationCategories,
    },
  };
}
export default AboutUs;
