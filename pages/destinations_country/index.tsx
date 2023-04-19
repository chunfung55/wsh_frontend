import React from "react";
import "@/styles/Home.module.css";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { commonGetStaticPropsContext } from "@/lib/api";
import { CommonPageProps, commonGetStaticProps } from "@/interfaces/common";
import Kenya from "./Kenya";

const DestinationsCountry = (props: CommonPageProps) => {
  const router = useRouter();
  const { nid } = router.query;
  const { t } = useTranslation("common");
  return (
    <Layout {...props}>
      <>
        {nid}
        <Kenya></Kenya>
      </>
    </Layout>
  );
};

export async function getStaticProps({ locale }: commonGetStaticProps) {
  return commonGetStaticPropsContext(locale);
}
export default DestinationsCountry;
