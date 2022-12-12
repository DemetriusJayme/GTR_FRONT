import { useState, useEffect } from "react";
import api from "../../api/api";

function NotificationPage() {
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLogs() {
      try {
        const response = await api.get("/log/my-logs");
        setLogs(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchLogs();
  }, []);

  return (
    <div className="mt-5">
      {!isLoading &&
        logs
          .map((log) => {
            return (
              <div className="mb-3">
                {log.status} - Data: {log.date.slice(0, 10)}
              </div>
            );
          })
          .reverse()}
    </div>
  );
}

export default NotificationPage;
