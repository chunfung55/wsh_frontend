export type CommonPageProps = {
  children: JSX.Element;
  navItems: navItems;
};

export type navBarProps = { navItems: navItem[] };

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
