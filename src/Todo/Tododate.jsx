import { useEffect, useState } from "react";


export const TodoDate = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formmatedDate = now.toLocaleDateString();
      const formmatedTime = now.toLocaleTimeString();
      setDateTime(`${formmatedDate} - ${formmatedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1 className="date-time">{dateTime}</h1>
};
