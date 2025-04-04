import axios from "axios";
import { useEffect, useState } from "react";

const useApi = (url, method = "GET", body = null, headers = {}, autoFetch = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (!url) return;
    setLoading(true);
    setError(null);

    try {
      const response = await axios({
        method,
        url,
        data: body,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        timeout: 30000,
      });

      setData(response.data || []);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (method === "GET" && autoFetch) {
      fetchData();
    }
  }, [url, method]);

  const request = async (method, newBody = null, customHeaders = {}) => {
    setLoading(true);
    setError(null);

    try {
      const isFormData = newBody instanceof FormData; // ✅ Check if body is FormData

      const response = await axios({
        method,
        url,
        data: newBody,
        headers: {
          ...(isFormData ? {} : { "Content-Type": "application/json" }), // ✅ Only set JSON if not FormData
          ...customHeaders,
        },
        timeout: 30000,
      });

      setData(response.data);
      return response.data;
    } catch (err) {
      console.error("API Request Error:", err.response || err.message);
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch: fetchData, request };
};

export default useApi;
