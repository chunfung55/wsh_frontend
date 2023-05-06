import React from "react";
import "@/styles/Home.module.css";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import Layout from "@/components/layout";
import {
  DestinationsCountryPageProps,
  DestinationsStaticProps,
  StaticPathsProps,
  idProps,
} from "@/interfaces/common";
import Country from "./Country";
import {
  getDestinationCategorieDetail,
  getDestinationCategorieId,
  getDestinationCategories,
} from "@/services/common";
import { commonGetStaticPropsContext } from "@/lib/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const DestinationsCountry = (props: DestinationsCountryPageProps) => {
  return (
    <Layout {...props}>
      <Country country={props.destinationCategorieDetail} />
    </Layout>
  );
};

export async function getStaticProps({
  locale,
  params,
}: DestinationsStaticProps) {
  const props = await commonGetStaticPropsContext(locale);
  const tmpProps = props.props;
  const destinationCategorieDetail = await getDestinationCategorieDetail(
    params.nid as string
  );
  return {
    props: {
      ...tmpProps,
      destinationCategorieDetail: destinationCategorieDetail,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export async function getStaticPaths({ locale }: StaticPathsProps) {
  let ids = await getDestinationCategorieId(locale);
  ids = ids.map(({ id }: idProps) => ({ params: { nid: "" + id } }));
  console.log(ids);
  // const ids = [{ params: { nid: "1" } }];
  return {
    paths: ids,
    fallback: true,
  };
}
export default DestinationsCountry;
