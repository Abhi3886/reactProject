import { useState, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logInToHide } from "../features/index";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // Store field-specific errors
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateForm = useCallback(() => {
    let newErrors = {};

    // Validate username
    if (!username.trim() || !password.trim()) {
      newErrors.error = "Username and Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  }, [username, password]);

  const submitForm = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    try {
      const res = await fetch("http://localhost:5000/api/Log-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/");
        dispatch(logInToHide(true));
      }

      if (data.error) {
        setErrors({ ...errors, backend: data.error }); // Handle backend errors
      } else {
        console.log(data.message);
        setErrors({}); // Clear errors on success
      }
    } catch (error) {
      setErrors({
        ...errors,
        backend: "Error submitting form. Please try again.",
      });
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-rows align-items-center ">
        <img className="mx-auto h-10 w-auto" src="#" alt="Your Company" />
        <NavLink to="/Sign-Up">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </button>
        </NavLink>
      </div>

      <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        Login in to your account
      </h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {(errors.backend || errors.error) && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {errors.backend || errors.error}
          </div>
        )}

        <form className="space-y-6" onSubmit={submitForm}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="username"
                id="username"
                required
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
