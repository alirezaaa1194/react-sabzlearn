import { apiRequest } from "~/Services/Axios/config";
import type { courseSessionType } from "~/types/course.type";

export function getMenus() {
  const data = apiRequest.get("/menus");
  return data;
}

export function getAllCourses() {
  const data = apiRequest.get("/courses");
  return data;
}

export function getPopularCourses() {
  const data = apiRequest.get("/courses/popular");
  return data;
}

export async function getAllArticles() {
  const res = await apiRequest.get("/articles");
  return res;
}

export type registerFuncPropsType = {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export function registerHandler({ name, username, email, phone, password, confirmPassword }: registerFuncPropsType) {
  const res = apiRequest.post("/auth/register", { name, username, email, phone, password, confirmPassword });
  return res;
}
export type loginFuncPropsType = {
  identifier: string;
  password: string;
};

export function loginHandler({ identifier, password }: loginFuncPropsType) {
  const res = apiRequest.post("/auth/login", { identifier, password });
  return res;
}

export const getCookie = (cookieHeader: string | null, cookieName: string): string | null => {
  if (!cookieHeader) return null;

  const cookies = cookieHeader.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === cookieName) {
      return decodeURIComponent(value);
    }
  }
  return null;
};
export const getMe = async (token: string | null) => {
  const res = await apiRequest.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

export const getSingleCourse = async (courseName: string) => {
  const data = await apiRequest.get(`/courses/${courseName}`);
  return data;
};

export const courseTimeHandler = (sessions: courseSessionType[]) => {
  if (sessions.length) {
    const times: string[] = [];
    sessions.map((session: courseSessionType) => times.push(session.time));

    const mins: number[] = [];
    const secs: number[] = [];

    times.map((time: string) => {
      let splitedTime = time.split(":");
      mins.push(+splitedTime[0]);
      secs.push(+splitedTime[1]);
    });

    const sumMins = mins.reduce((prev, current) => prev + current);
    const sumSecs = secs.reduce((prev, current) => prev + current);

    let finishTime = Math.round((sumMins + Math.round(sumSecs / 60)) / 60);
    return finishTime > 1 ? finishTime + " ساعت" : sumMins + Math.round(sumSecs / 60) + " دقیقه";
  }
  return "0 ساعت";
};

export const saveComment = async (commentText: FormDataEntryValue | null, courseName: string, token: string | undefined) => {
  const res = await apiRequest.post(
    "/comments",
    {
      body: commentText,
      courseShortName: courseName,
      score: "5",
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const getOneSession = async (courseShortName: string, sessionId: string, token: string | undefined) => {
  const res = await apiRequest.get(`/courses/${courseShortName}/${sessionId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const getSingleArticle = async (ArticleShortName: string) => {
  const res = await apiRequest.get(`/articles/${ArticleShortName}`);
  return res;
};

export const registerCourse = async (courseId: string, token: string | null) => {
  const res = apiRequest.post(
    `/courses/${courseId}/register`,
    {
      price: "1111",
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};
export const getAllCategories = async () => {
  const res = await apiRequest.get("/category");
  return res;
};
export const getPreSellCourses = async () => {
  const res = await apiRequest.get("/courses/presell");
  return res;
};

export const getCourseByCategory = async (categoryName: string) => {
  const res = await apiRequest.get(`/courses/category/${categoryName}`);
  return res;
};
export const getUserTickets = async (token: string | null) => {
  const res = await apiRequest.get(`/tickets/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const getAllSessions = async () => {
  const res = await apiRequest.get(`/courses/sessions`);
  return res;
};
export const getDepartments = async () => {
  const res = await apiRequest.get(`/tickets/departments`);
  return res;
};

export const saveTicket = async (ticketInfo: any, token: string | null) => {
  const res = await apiRequest.post(`/tickets`, ticketInfo, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
export const getTicketAnswer = async (ticketId: string, token: string | null) => {
  const res = await apiRequest.get(`/tickets/answer/${ticketId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
export const updateUserInfo = async (userNewInfo: any, token: string | null) => {
  const res = await apiRequest.put(`/users`, userNewInfo, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const getAllUsers = async (token: string) => {
  const res = await apiRequest.get("/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const saveNewCourse = async (token: string, formData: any) => {
  const res = await apiRequest.post("/courses", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
export const saveNewSesson = async (token: string, formData: any, courseId: string) => {
  const res = await apiRequest.post(`/courses/${courseId}/sessions`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
export const removeCourse = async (courseId: string, token: string) => {
  const res = apiRequest.delete(`/courses/${courseId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
export const removeLesson = async (lessonId: string, token: string) => {
  const res = apiRequest.delete(`/courses/sessions/${lessonId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

export const getAllComments = async () => {
  const res = await apiRequest.get("/comments");
  return res;
};

export const acceptComment = async (token: string, commentId: string) => {
  const res = await apiRequest.put(
    `/comments/accept/${commentId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};
export const rejectComment = async (token: string, commentId: string) => {
  const res = await apiRequest.put(
    `/comments/reject/${commentId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const deleteComment = async (token: string, commentId: string) => {
  const res = await apiRequest.delete(`/comments/${commentId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
export const answerToComment = async (token: string, commentId: string, answerBody: string) => {
  const res = await apiRequest.post(
    `/comments/answer/${commentId}`,
    {
      body: answerBody,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const getAllTickets = async (token: string) => {
  const res = await apiRequest.get("/tickets", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const answerToTicket = async (token: string, ticketId: string, answerBody: string) => {
  const res = await apiRequest.post(
    `/tickets/answer`,
    {
      ticketID: ticketId,
      body: answerBody,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const getAllPAdminMenus = async () => {
  const res = await apiRequest.get("/menus/all");
  return res;
};

export const saveNewMenu = async (token: string, data: any) => {
  const res = await apiRequest.post("/menus", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const deleteMenu = async (token: string, menuId: string) => {
  const res = await apiRequest.delete(`/menus/${menuId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const baseUrl = "http://127.0.0.1:4000";
export const baseRoute = "http://localhost:5173";
