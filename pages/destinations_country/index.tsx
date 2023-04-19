import React from "react";
import "@/styles/Home.module.css";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { commonGetStaticPropsContext } from "@/lib/api";
import {
  CommonGetStaticProps,
  DestinationsCountryPageProps,
} from "@/interfaces/common";
import Country from "./Country";
import { getDestinationCategorieDetail } from "@/services/common";

const DestinationsCountry = (props: DestinationsCountryPageProps) => {
  return (
    <Layout {...props}>
      <>
        <Country country={props.destinationCategories}></Country>
      </>
    </Layout>
  );
};

export async function getStaticProps({ locale, params }: CommonGetStaticProps) {
  // const router = useRouter();
  // const { nid } = router.query;
  const props = commonGetStaticPropsContext(locale);
  console.log("props: ", props);
  // props.props["DestinationCategories"] = await getDestinationCategorieDetail(
  //   "6" as string
  // );

  return { ...props };
}
export default DestinationsCountry;
