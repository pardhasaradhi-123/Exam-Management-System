import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(true);

  const inputs = [
    {
      id: 0,
      label: "username",
      inputType: "text",
      placeholder: "Enter Username",
    },
    { id: 1, label: "email", inputType: "email", placeholder: "Enter Email" },
    {
      id: 2,
      label: "password",
      inputType: "password",
      placeholder: "Enter Password",
    },
  ];

  if (isSignUp) {
    inputs.push({
      id: 3,
      label: "department",
      inputType: "select",
      options: [
        "Select Departments",
        "CSE",
        "Mechanical",
        "Electrical",
        "Civil",
      ],
    });
  } else {
    inputs.shift();
  }

  const navigate = useNavigate();

  const [inputState, setInputState] = useState({
    email: "",
    password: "",
    department: "Select Departments",
    username: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    department: "",
    username: "",
  });

  const validate = () => {
    let valid = true;
    const newErrors = { email: "", password: "", department: "", username: "" };

    if (isSignUp && !inputState.username) {
      newErrors.username = "Username is required";
      valid = false;
    }

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

    if (isSignUp && inputState.department === "Select Departments") {
      newErrors.department = "Department is required";
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
    if (validate()) {
      const existingData =
        JSON.parse(localStorage.getItem("authDataList")) || [];

      if (isSignUp) {
        const existingAccount = existingData.find(
          (account) => account.email === inputState.email
        );

        if (existingAccount) {
          toast.warn("Account already exists! Go to Sign In Form");
        } else {
          const newData = {
            email: inputState.email,
            password: inputState.password,
            username: inputState.username,
            department: inputState.department,
          };

          existingData.push(newData);
          localStorage.setItem("authDataList", JSON.stringify(existingData));

          toast.success(`${inputState.username} sign up successful!`);
          setInputState({
            email: "",
            password: "",
            department: "Select Departments",
            username: "",
          });
          navigate("/student");
        }
      } else {
        const existingUser = existingData.find(
          (user) => user.email === inputState.email
        );
        if (existingUser) {
          navigate("/student");
        } else {
          toast.error("Account does not exist!");
        }
        if (
          inputState.email === "staff@gmail.com" &&
          inputState.password === "1234567890"
        ) {
          navigate("/admin-dashboard");
        }
      }
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center bg-indigo-900">
        <div
          className={`max-h-[100vh] bg-white rounded-lg p-5 max-w-[700px] max-sm:p-3 overflow-y-auto`}
        >
          <div className="flex justify-center mb-5 max-sm:mb-3">
            <button
              className={`text-2xl font-bold p-3 ${
                isSignUp ? "text-indigo-600" : "text-gray-500"
              }`}
              onClick={() => {
                setIsSignUp(true);
                setErrors({
                  email: "",
                  password: "",
                  department: "",
                  username: "",
                });
                setInputState({
                  email: "",
                  password: "",
                  department: "Select Departments",
                  username: "",
                });
              }}
            >
              Sign Up
            </button>
            <button
              className={`text-2xl font-bold p-3 ${
                !isSignUp ? "text-indigo-600" : "text-gray-500"
              }`}
              onClick={() => {
                setIsSignUp(false);
                setErrors({
                  email: "",
                  password: "",
                  department: "",
                  username: "",
                });
                setInputState({
                  email: "",
                  password: "",
                  department: "Select Departments",
                  username: "",
                });
              }}
            >
              Sign In
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {inputs.map((eachInput) => (
              <div key={eachInput.id} className="flex flex-col gap-3 mt-3">
                <label htmlFor={eachInput.label} className="capitalize">
                  {eachInput.label}
                  <span className="text-red-600">*</span>:
                </label>
                {eachInput.inputType === "select" ? (
                  <select
                    name={eachInput.label}
                    value={inputState[eachInput.label]}
                    onChange={handleChange}
                    className="p-3 outline-none bg-[#f5f5f5] rounded-md"
                  >
                    {eachInput.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
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
                )}
                {errors[eachInput.label] && (
                  <span className="text-red-500 text-sm">
                    {errors[eachInput.label]}
                  </span>
                )}
              </div>
            ))}
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-900 hover:text-white w-full mt-5 p-3 rounded-md uppercase font-semibold"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
          <div className="my-5">
            <h2 className="text-lg font-semibold">Note:</h2>
            <ol className="list-decimal pl-10">
              <li>
                If you are a student and don't have an account, please use the
                Sign Up form.
              </li>
              <li>
                If you are a student and already have an account, please use the
                Sign In form.
              </li>
              <li>If you are a teacher, please use the Sign In form.</li>
            </ol>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
