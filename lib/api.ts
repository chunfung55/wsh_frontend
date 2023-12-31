import { CommonGetStaticProps } from "@/interfaces/common";
import {
  getBanner,
  getDestinationCategories,
  getMenu,
} from "@/services/common";
import qs from "qs";

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337"
  }${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;
  console.log("requestUrl", requestUrl);
  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error("An error occured please try again");
  }
  const data = await response.json();
  return data;
}

export async function commonGetStaticPropsContext(locale: string) {
  const [mainMeuns, banner, destinationCategories] = await Promise.all([
    getMenu(locale),
    getBanner(locale),
    getDestinationCategories(locale),
  ]);
  return {
    props: {
      navItems: mainMeuns,
      locale: locale,
      sliderImgs: banner,
      destinationCategories: destinationCategories,
    },
    revalidate: 10, // In seconds
  };
}
