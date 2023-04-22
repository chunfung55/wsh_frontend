import React from "react";
import "@/styles/Home.module.css";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import Layout from "@/components/layout";
import {
  DestinationsCountryPageProps,
  DestinationsStaticProps,
} from "@/interfaces/common";
import Country from "./Country";
import { getDestinationCategorieDetail } from "@/services/common";
import { commonGetStaticPropsContext } from "@/lib/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const DestinationsCountryDetail = (props: DestinationsCountryPageProps) => {
  return (
    <Layout {...props}>
      <Country country={props.destinationCategories} />
    </Layout>
  );
};

export async function getStaticProps({
  locale,
  params,
}: DestinationsStaticProps) {
  const props = await commonGetStaticPropsContext(locale);
  const tmpProps = props.props;
  const destinationCategories = await getDestinationCategorieDetail(
    params.nid as string
  );
  return {
    props: {
      ...tmpProps,
      destinationCategories: destinationCategories,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { nid: "6" } }],
    fallback: true,
  };
}
export default DestinationsCountryDetail;
