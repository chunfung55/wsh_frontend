import React from "react";
import "@/styles/Home.module.css";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { getMenu } from "@/services/common";
import {
  CommonPageProps,
  commonGetStaticProps,
  navBarProps,
} from "@/interfaces/common";
import Term from "./Term";
import { commonGetStaticPropsContext } from "@/lib/api";

const TermsAndCondition = (props: CommonPageProps) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <Layout {...props}>
      <Term />
    </Layout>
  );
};

export async function getStaticProps({ locale }: commonGetStaticProps) {
  return commonGetStaticPropsContext(locale);
}
export default TermsAndCondition;
