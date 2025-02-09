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
      setProgress(10); // شروع از ۱۰٪ برای جلوگیری از ثابت موندن

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
    <div className="fixed top-0 left-0 z-![999999999999999999] w-full h-1 bg-transparent">
      <div
        className="h-full bg-primary transition-all duration-200"
        style={{
          width: `${progress}%`,
          opacity: isLoading ? 1 : 0,
        }}
      />
    </div>
  );
};

export default ProgressBar;
