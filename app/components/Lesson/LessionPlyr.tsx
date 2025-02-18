import React, { memo, useEffect, useState } from "react";
import { Skeleton } from "@heroui/skeleton";

const Plyr = React.lazy(() => import("plyr-react"));
import "plyr-react/plyr.css";
import { baseUrl } from "~/utils/utils";

const LessionPlyr = memo(({ video, poster }: any) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const videoOptions = {
    type: "video",
    sources: [
      {
        src: `${baseUrl}/courses/covers/${video}`,
        type: "video/mp4",
      },
    ],
    poster: `${baseUrl}/courses/covers/${poster}`,
  };
  return isClient ? <Plyr source={videoOptions as any} /> : <Skeleton className="w-full aspect-video rounded-lg"></Skeleton>;
});
export default LessionPlyr;
