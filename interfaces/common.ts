export type SampleProps = {
  children: JSX.Element;
};

export type CommonPagePropsNChildren = {
  children: JSX.Element;
  navItems: NavItems;
  sliderImgs: sliderImgs;
};

export type CommonPageProps = {
  navItems: NavItems;
  locale: string;
  sliderImgs: sliderImgs;
};

export type CommonComponentProps = {
  locale: string;
};

export type NavBarProps = { navItems: NavItem[] };

export type ImageSliderProps = { sliderImgs: sliderImgs };

export type NavItems = NavItem[];
export type sliderImgs = SliderImg[];

export interface SliderImg {
  imglink: string;
  url: string;
}

export interface NavItem {
  order: number;
  id: number;
  title: string;
  type: string;
  path: string;
  externalPath: string | null;
  uiRouterKey: string;
  menuAttached: boolean;
  collapsed: boolean;
  createdAt: string;
  updatedAt: string;
  audience: any[];
  parent: NavItem | null;
  related: any[] | null;
  items: any[] | null;
  submenu: NavItem[] | null;
}

export type CommonGetStaticProps = { locale: string };

export interface DestinationCategories {
  Name: string;
  Detail: string;
  Why_Visit: string;
  Best_Time_to_Visit: string;
  Capture: string;
}
