import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url, key) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
      setError(null);
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const cachedData = localStorage.getItem(key);
    if (cachedData) {
      setData(JSON.parse(cachedData));
    } else {
      fetchData();
    }
  }, [url, key]);

  const refetch = () => {
    fetchData();
  };

  const clearCache = () => {
    localStorage.removeItem(key);
    setData(null);
  };

  return { data, loading, error, refetch, clearCache };
};

export default useFetchData;
