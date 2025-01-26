import { createCookieSessionStorage } from "react-router";

export type SessionType = {
  theme: "light" | "dark";
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
