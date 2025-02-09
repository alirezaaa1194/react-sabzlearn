import { useState, useEffect } from "react";
import { useNavigation } from "react-router";

const ProgressBar = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (navigation.state === "loading") {
      setIsLoading(true);
      setProgress(10);

      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 90) return prev + Math.random() * 10;
          return prev;
        });
      }, 200);
    } else if (navigation.state === "idle") {
      setProgress(100);
      setTimeout(() => {
        setProgress(0);
        setIsLoading(false);
      }, 300);
    }

    return () => clearInterval(interval);
  }, [navigation.state]);

  return (
    <div className="fixed top-0 left-0 !z-[1000000000] w-full h-1 bg-transparent">
      <div
        className="h-full bg-green-500 shadow-md shadow-green-500 transition-all duration-200 rounded-sm"
        style={{
          width: `${progress}%`,
          opacity: isLoading ? 1 : 0,
        }}
      />
    </div>
  );
};

export default ProgressBar;
