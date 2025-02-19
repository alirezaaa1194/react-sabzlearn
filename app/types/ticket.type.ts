export type ticketType = {
  _id: string;
  departmentID: {
    _id: string;
    title: string;
    value: string;
  };
  departmentSubID: {
    _id: string;
    title: string;
  };
  priority: number;
  title: string;
  body: string;
  user: string;
  answer: number;
  course: string;
  isAnswer: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
