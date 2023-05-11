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
  destinationCategories: DestinationCategorie[];
};
export type StaticPathsProps = {
  locale: string;
};
export type DestinationsCountryPageProps = {
  destinationCategorieDetail: DestinationCategorie;
} & CommonPageProps;

export type ContextPageProps = {
  contact: ContactInfo;
} & CommonPageProps;

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
  submenu: NavItem[];
}

export type CommonGetStaticProps = { locale: string };

export type DestinationsStaticProps = {
  params: { nid: string };
} & CommonGetStaticProps;

export interface DestinationCategorie {
  id: number;
  attributes: {
    Name: string;
    Detail: string;
    Why_Visit: string;
    Best_Time_to_Visit: string;
    Capture: string;
    Destinations: { data: Destination[] };
    Child_Destination: { data: DestinationCategorie[] };
  };
}

export interface Destination {
  id: number;
  attributes: {
    Ranking: number;
    Title: string;
    Capture: string;
    Detail: string;
    Detail2: string;
    Detail3: string;
    Why_Visit: string;
    Best_Time_to_Visit: string;
    Title2: string;
    List_Photo: { data: { attributes: { url: string } } };
  };
}

export type PlacesYouMayVisitProps = {
  imageLink: string;
  destinationsTitle: string;
};

export type idProps = {
  id: string;
  attributes: null;
};

export type onClickProps = {
  index: number;
  event:
    | React.MouseEvent<HTMLButtonElement>
    | React.MouseEvent<HTMLSpanElement, MouseEvent>;
};

export interface ContactInfo {
  id: number;
  attributes: {
    Tel: string;
    Email: string;
    Address: string;
    Office_Hour: string;
    Office_Hour2: string;
    Office_Hour3: string;
    Google_Map: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
  };
}

export interface FormInputState {
  Name: string;
  Email: string;
  Phone: string;
  Month: string;
  Year: string;
  NumberOfNights: string;
  NumberOfAdults: string;
  NumberOfChildren: string;
  PleaseTickWhichCountry: string;
  IsThereAnythingYoudLikeToKetUsKnow: string;
}

export interface ButtonStates {
  [key: string]: boolean;
}
