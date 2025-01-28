export type categoryIDType = {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  name: string;
};

export type courseType = {
  _id: string;
  name: string;
  description: string;
  cover: string;
  support: string;
  shortName: string;
  price: number;
  isComplete: number;
  status: string;
  categoryID: categoryIDType;
  creator: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  registers: number;
  courseAverageScore: number;
};
