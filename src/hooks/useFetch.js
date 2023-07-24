import { useState } from "react";

const useFetch = (promiseCreator, req) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  let result = { loading, error, success };

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await promiseCreator(req);
      setSuccess(data);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  return [result, fetchData];
};

export default useFetch;
