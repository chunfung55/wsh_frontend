export type CommonPagePropsNChildren = {
  children: JSX.Element;
  navItems: navItems;
  sliderImgs: sliderImgs;
};

export type CommonPageProps = {
  navItems: navItems;
  locale: string;
  sliderImgs: sliderImgs;
};

export type CommonComponentProps = {
  locale: string;
};

export type navBarProps = { navItems: navItem[] };

export type imageSliderProps = { sliderImgs: sliderImgs };

export type navItems = navItem[];
export type sliderImgs = sliderImg[];

export interface sliderImg {
  imglink: string;
  url: string;
}

export interface navItem {
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
  parent: navItem | null;
  related: any[] | null;
  items: any[] | null;
  submenu: navItem[] | null;
}

export type commonGetStaticProps = { locale: string };
