import type { courseType } from "./course.type";

export type userType = {
  _id: string;
  username: string;
  email: string;
  name: string;
  phone: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  courses: courseType[];
  notifications: any[];
};
