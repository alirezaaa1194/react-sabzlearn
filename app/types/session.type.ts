export type sessionType = {
  _id: string;
  title: string;
  time: string;
  video: string;
  course: {
    _id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
  free: number;
};
