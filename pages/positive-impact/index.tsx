import React from "react";
import "@/styles/Home.module.css";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { getMenu } from "@/services/common";
import { commonGetStaticProps, navBarProps } from "@/interfaces/common";
import Position from "./Position";

const PositiveImpact = ({ navItems }: navBarProps) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <Layout navItems={navItems}>
      <Position />
    </Layout>
  );
};

export async function getStaticProps({ locale }: commonGetStaticProps) {
  const [mainMeuns] = await Promise.all([getMenu(locale)]);
  return {
    props: {
      navItems: mainMeuns,
    },
  };
}
export default PositiveImpact;
