import React, { type PropsWithChildren } from "react";

const Test:React.FC<PropsWithChildren> =({children})=> {
  return (
    <button
      onClick={() => {


        
        fetch("http://127.0.0.1:4000/v1/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: "اکبر", username: "akbar", email: "akbar@gmail.com", phone: "09016397334", password: "12345678", confirmPassword: "12345678" }),
        });
      }}
    >
      register
    </button>
  );
}

export default Test;
