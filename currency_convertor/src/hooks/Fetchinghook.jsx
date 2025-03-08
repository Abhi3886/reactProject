import { useEffect, useState } from "react";

function useFetching(from) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!from) return; // Prevent running if currency is not selected

    setLoading(true);
    setError(null);

    fetch(`https://open.er-api.com/v6/latest/${from}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        if (result.rates) {
          setData(result.rates); // Store rates object
        } else {
          setError("Invalid currency code");
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [from]); // Refetch if "from" currency changes

  return { data, error, loading };
}

export default useFetching;
