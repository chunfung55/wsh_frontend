import { NavItem, NavItems } from "@/interfaces/common";
import { fetchAPI, getStrapiURL } from "@/lib/api";

const changeLanguage = (locale: string) => {
  if (locale === "zh") {
    return "zh-Hant-HK";
  } else {
    return locale;
  }
};
export async function getMenu(locale: string) {
  locale = changeLanguage(locale);
  const navItemsRespose = await fetchAPI("/navigation/render/main-navigation", {
    locale: locale,
    populate: "*",
  });
  let mainMeuns: NavItems = navItemsRespose.filter(
    (obj: NavItem) => obj?.parent == null
  );
  mainMeuns = mainMeuns.map((obj) => ({ ...obj, submenu: [] }));
  navItemsRespose.forEach((element: NavItem) => {
    if (element?.parent) {
      let index = 0;
      mainMeuns.forEach((mainMeun: NavItem) => {
        if (mainMeun?.id == element?.parent?.id) {
          mainMeuns[index]?.submenu?.push(element);
        }
        index++;
      });
    }
  });
  return mainMeuns;
}
export async function getBanner(locale: string) {
  locale = changeLanguage(locale);
  const bannerRespose = await fetchAPI("/banners", {
    locale: locale,
    populate: "*",
  });
  const banners: { href: string; imglink: string }[] = [];
  bannerRespose.data.forEach((element: any) => {
    const banner = {
      href: element?.attributes?.Url,
      imglink:
        getStrapiURL() + element?.attributes?.Photo?.data?.attributes?.url,
    };
    banners.push(banner);
  });
  return banners;
}

export async function getDestinationCategories(locale: string) {
  const destinationCategories = await fetchAPI("/destination-categories", {
    locale: locale,
    filters: {
      Name: {
        $eq: "ALL",
      },
    },
    populate: {
      Child_Destination: {
        populate: "*",
      },
    },
  });
  // console.log("destinationCategories", destinationCategories.data);
  return destinationCategories.data;
}
export async function getDestinationCategorieDetail(id: string) {
  const destinationCategories = await fetchAPI(
    "/destination-categories/" + id,
    {
      populate: {
        Destinations: {
          populate: "*",
        },
      },
    }
  );
  return destinationCategories.data;
}

export async function getDestinationCategorieId(locale: string) {
  locale = changeLanguage(locale);
  const destinationCategories = await fetchAPI("/destination-categories", {
    fields: ["id"],
    locale: locale,
  });
  return destinationCategories.data;
}

export async function getContactInfo(locale: string) {
  locale = changeLanguage(locale);
  const contactInfo = await fetchAPI("/contact-info", {
    locale: locale,
  });
  return contactInfo.data;
}
