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

//////////////////////////////////////////////////////////

export type courseCreatorType = {
  _id: string;
  username: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  phone: string;
};

export type courseSessionType = {
  _id: string;
  title: string;
  time: string;
  video: string;
  course: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  free: number;
};

export type courseCommentAnswerType = {
  _id: string;
  body: string;
  course: string;
  creator: courseCreatorType;
  answer: number;
  isAnswer: number;
  mainCommendID: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  score: number;
};

export type courseCommentType = {
  _id: string;
  body: string;
  creator: courseCreatorType;
  answer: number;
  isAnswer: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  score: number;
  answerContent: courseCommentAnswerType;
};

export type singleCourseType = {
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
  creator: courseCreatorType;
  createdAt: string;
  updatedAt: string;
  __v: number;
  courseStudentsCount: number;
  sessions: courseSessionType[];
  comments: courseCommentType[];
  isUserRegisteredToThisCourse: boolean;
};
