import React, { useState } from "react";
import img from "../assets/logo.jpeg";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const inputs = [
    { id: 0, label: "email", inputType: "email", placeholder: "Enter Email" },
    {
      id: 1,
      label: "password",
      inputType: "password",
      placeholder: "Enter Password",
    },
  ];

  const navigate = useNavigate();

  const [inputState, setInputState] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!inputState.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(inputState.email)) {
      newErrors.email = "Email address is invalid";
      valid = false;
    }

    if (!inputState.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (inputState.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      validate() &&
      inputState.email === "client@gmail.com" &&
      inputState.password === "1234567890"
    ) {
      navigate("/student");
    } else {
      console.error(errors);
      navigate("/admin-dashboard");
    }
  };

  return (
    <>
      <div className="h-screen w-screen grid grid-cols-2 overflow-hidden">
        <div className="h-full">
          <img src={img} alt="Logo" className="h-full" />
        </div>
        <div className="flex items-center justify-center">
          <form
            className="bg-white rounded-lg p-7 w-96"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col justify-center items-center mb-5">
              <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
              <div className="bg-indigo-600 w-12 h-2 rounded-full"></div>
            </div>
            {inputs.map((eachInput) => (
              <div key={eachInput.id} className="flex flex-col gap-3 mt-3">
                <label htmlFor={eachInput.label} className="capitalize">
                  {eachInput.label}:
                </label>
                <input
                  type={eachInput.inputType}
                  placeholder={eachInput.placeholder}
                  className={`p-3 outline-none bg-[#f5f5f5] rounded-md ${
                    errors[eachInput.label] ? "border-red-500 border-2" : ""
                  }`}
                  name={eachInput.label}
                  value={inputState[eachInput.label]}
                  onChange={handleChange}
                />
                {errors[eachInput.label] && (
                  <span className="text-red-500 text-sm">
                    {errors[eachInput.label]}
                  </span>
                )}
              </div>
            ))}
            <button
              type="submit"
              className="bg-indigo-200 hover:bg-indigo-400 w-full mt-5 p-3 rounded-md uppercase font-semibold"
            >
              login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
