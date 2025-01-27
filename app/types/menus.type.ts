export type subSubMenuType = {
  _id: string;
  title: string;
  href: string;
  parent: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
export type subMenuType = {
  _id: string;
  title: string;
  href: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  submenus: subSubMenuType[];
};
