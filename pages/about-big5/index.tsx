import React from "react";
import "@/styles/Home.module.css";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { getDestinationCategories, getMenu } from "@/services/common";
import { CommonPageProps, commonGetStaticProps } from "@/interfaces/common";
import { commonGetStaticPropsContext } from "@/lib/api";

const AboutBig5 = (props: CommonPageProps) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <Layout {...props}>
      <></>
    </Layout>
  );
};

export async function getStaticProps({ locale }: commonGetStaticProps) {
  return commonGetStaticPropsContext(locale);
}
export default AboutBig5;
