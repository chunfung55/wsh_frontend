import React from "react";
import "@/styles/Home.module.css";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { getMenu } from "@/services/common";
import { CommonPageProps, CommonGetStaticProps } from "@/interfaces/common";
import ExtraMoment from "./ExtraMoment";
import { commonGetStaticPropsContext } from "@/lib/api";

const GuestCommand = (props: CommonPageProps) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <Layout {...props}>
      <ExtraMoment />
    </Layout>
  );
};

export async function getStaticProps({ locale }: CommonGetStaticProps) {
  return commonGetStaticPropsContext(locale);
}
export default GuestCommand;
