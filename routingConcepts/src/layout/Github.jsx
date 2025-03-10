import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  /* const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/Abhi3886
`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
    */

  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-300 text-black p-4 text-3xl">
      <p>Followers: {data.followers}</p>
      <img src={data.avatar_url} width={300} alt="Github_user_profile_pic" />
    </div>
  );
}

export default Github;

export const GithubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Abhi3886");

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};
