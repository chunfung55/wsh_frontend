export interface cardObj {
  imgLink: string;
  title: string;
  content: string;
  location?: string;
  night?: string;
  price?: string;
  href: string;
}

export interface termAConItem {
  img: string;
  title?: string;
  content?: string;
  url: string;
}

export interface LatesNewsItem {
  url: string;
  title: string;
  img: string;
  content: string;
  style: string;
}

export interface visitItem {
  url: string;
  title: string;
  img: string;
  content: string;
  style: string;
}

export interface cardItem {
  title: string;
  content: string;
  location: string;
}

export interface momentCardItem extends cardItem {
  author: string;
  date: string;
  img: string;
}

export interface imgCardItem extends cardItem {
  imgLink: string;
  night: string;
  price: string;
  href: string;
}

export interface buttonItem {
  cssName: string;
  content: string;
  url: string;
}
