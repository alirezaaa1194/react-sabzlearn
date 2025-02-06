import { createCookieSessionStorage } from "react-router";

export type SessionType = {
  theme: "light" | "dark";
  token?: string;
  coursesId: FormDataEntryValue | null;
  sessionsId: FormDataEntryValue | null;
  offerCode: FormDataEntryValue | null;
};

const session = createCookieSessionStorage<SessionType>({
  cookie: {
    name: "session",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    secrets: ["s3cret1"],
    secure: true,
  },
});
export default session;
