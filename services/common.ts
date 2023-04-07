import { navItem, navItems } from "@/interfaces/common";
import { fetchAPI } from "@/lib/api";

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
  let mainMeuns: navItems = navItemsRespose.filter(
    (obj: navItem) => obj?.parent == null
  );
  mainMeuns = mainMeuns.map((obj) => ({ ...obj, submenu: [] }));
  navItemsRespose.forEach((element: navItem) => {
    if (element?.parent) {
      let index = 0;
      mainMeuns.forEach((mainMeun: navItem) => {
        if (mainMeun?.id == element?.parent?.id) {
          mainMeuns[index]?.submenu?.push(element);
        }
        index++;
      });
    }
  });
  return mainMeuns;
}

export async function getDestinationCategories() {
  const destinationCategories = await fetchAPI("/destination-categories", {
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
  console.log("destinationCategories", destinationCategories.data);
  return destinationCategories.data;
}
