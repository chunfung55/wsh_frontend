import React from "react";
import "@/styles/Home.module.css";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { getMenu } from "@/services/common";
import {
  CommonPageProps,
  CommonGetStaticProps,
  NavBarProps,
} from "@/interfaces/common";
import LatestNews from "./LatestNews";

const GuestCommand = (props: CommonPageProps) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <Layout {...props}>
      <LatestNews />
    </Layout>
  );
};

export async function getStaticProps({ locale }: CommonGetStaticProps) {
  return commonGetStaticPropsContext(locale);
}
export default GuestCommand;
