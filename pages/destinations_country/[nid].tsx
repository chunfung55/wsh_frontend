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

const DestinationsCountry = (props: DestinationsCountryPageProps) => {
  return (
    <Layout {...props}>
      <>
        <Country country={props.destinationCategories}></Country>
      </>
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

  console.log("7777777777777D", {
    props: { ...tmpProps, ...destinationCategories },
  });
  return {
    props: { ...tmpProps, destinationCategories: destinationCategories },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { nid: "6" } }],
    fallback: true,
  };
}
export default DestinationsCountry;
