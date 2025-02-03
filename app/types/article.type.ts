export type articleCreatorType = {
  _id: string;
  username: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  profile: string;
  phone: string;
};

export type articleType = {
  _id: string;
  title: string;
  description: string;
  body: string;
  cover: string;
  shortName: string;
  categoryID: string;
  creator: articleCreatorType;
  publish: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type singleArticleCategoryType = {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  name: string;
};

export type singleArticleType = {
  _id: string;
  title: string;
  description: string;
  body: string;
  cover: string;
  shortName: string;
  categoryID: singleArticleCategoryType;
  creator: articleCreatorType;
  createdAt: string;
  updatedAt: string;
  __v: number;
  publish: number;
};
