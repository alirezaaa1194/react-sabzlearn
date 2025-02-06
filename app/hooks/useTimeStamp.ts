import React, { useEffect, useState } from "react";

function useTimeStamp() {
  const timeStamp = 475716;

  const [dayStamp, setDayStamp] = useState(Math.floor(timeStamp / (60 * 60 * 24)) || 0);
  const [hourStamp, setHourStamp] = useState(Math.floor((timeStamp % (60 * 60 * 24)) / (60 * 60)) || 0);
  const [minStamp, setMinStamp] = useState(Math.floor(((timeStamp % (60 * 60 * 24)) % (60 * 60)) / 60) || 0);
  const [secStamp, setSecStamp] = useState(Math.floor(((timeStamp % (60 * 60 * 24)) % (60 * 60)) % 60) || 0);

  useEffect(() => {
    const timerCounter = setInterval(() => {
      if (secStamp > 0) {
        setSecStamp((prev) => prev - 1);
      } else {
        if (minStamp > 0) {
          setSecStamp(59);
          setMinStamp((prev) => prev - 1);
        } else {
          if (hourStamp > 0) {
            setSecStamp(59);
            setMinStamp(59);

            setHourStamp((prev) => prev - 1);
          } else {
            if (dayStamp > 0) {
              setDayStamp((prev) => prev - 1);
              setHourStamp(23);
              setSecStamp(59);
              setMinStamp(59);
            } else {
              clearInterval(timerCounter);
            }
          }
        }
      }
    }, 1000);

    return () => {
      clearInterval(timerCounter);
    };
  }, [dayStamp, hourStamp, minStamp, secStamp]);

  return [dayStamp, hourStamp, minStamp, secStamp];
}

export default useTimeStamp;
