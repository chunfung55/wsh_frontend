import React from "react";
import "@/styles/Home.module.css";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { commonGetStaticPropsContext } from "@/lib/api";
import { CommonPageProps, CommonGetStaticProps } from "@/interfaces/common";

const ItineraiesList = (props: CommonPageProps) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <Layout {...props}>
      <></>
    </Layout>
  );
};

export async function getStaticProps({ locale }: CommonGetStaticProps) {
  return commonGetStaticPropsContext(locale);
}
export default ItineraiesList;
