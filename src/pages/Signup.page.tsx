import { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { HiLockClosed } from "react-icons/hi";
import { HiAtSymbol } from "react-icons/hi";
import * as yup from "yup";
import Input from "../component/Input/Input";
import Button from "../component/Button/Button";
import { useFormik } from "formik";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";

interface Props {}

const Signup: FC<Props> = (props) => {
  const history = useHistory();
  const [checkbox, setcheckbox] = useState(false);
  const {
    handleSubmit,
    getFieldProps,
    touched,
    isSubmitting,
    errors,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: yup
      .object()
      .required()
      .shape({
        username: yup.string().required(),
        email: yup.string().required().email(),
        password: yup.string().required().min(8),
      }),
    onSubmit: (data, { setSubmitting }) => {
      console.log("form submitting", data);
      setTimeout(() => {
        console.log("form submitted succesfully");
        history.push("/dashboard");
      }, 5000);
    },
  });
  return (
    <div className="w-1/2 min-h-screen mx-auto sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-4xl font-normal">
          Get started with a <div>free account </div>
        </h1>
      </div>
      <p className="mt-4">
        Already have an account?
        <span>
          <Link to="/Login" className="text-blue-600 underline">
            Log in
          </Link>
        </span>
      </p>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div className="flex py-3 border-t-0 border-b-2 border-l-0 border-r-0">
            <FiUser className="w-6 h-12 text-blue-500"></FiUser>
            <label htmlFor="Username" className="sr-only">
              Username
            </label>
            <Input
              id="username"
              type="username"
              autoComplete="username"
              required
              touched={touched.username}
              error={errors.username}
              {...getFieldProps("username")}
              placeholder="Username"
            />
          </div>
          <div className="flex py-3 border-t-0 border-b-2 border-l-0 border-r-0">
            <HiAtSymbol className="w-6 h-12 text-blue-500"></HiAtSymbol>
            <label htmlFor="email" className="sr-only">
              email-=address
            </label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              required
              touched={touched.email}
              error={errors.email}
              {...getFieldProps("email")}
              placeholder="email"
            />
          </div>
          <div className="flex py-3 border-t-0 border-b-2 border-l-0 border-r-0">
            <HiLockClosed className="w-6 h-12 text-blue-500"></HiLockClosed>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <Input
              id="password"
              type={checkbox ? "text" : "password"}
              autoComplete="Current Password"
              required
              touched={touched.password}
              error={errors.password}
              {...getFieldProps("password")}
              placeholder="Password"
            />
          </div>
          <div className="flex py-6">
            <input type="checkbox" />
            <p>
              I agree to the
              <span className="text-blue-400">terms and conditions </span>
            </p>
          </div>
          <div className="flex justify-between">
            <div>
              <label className="pt-4 text-black ">Show Password</label>
              <input
                type="checkbox"
                checked={checkbox}
                onChange={() => setcheckbox((value) => !value)}
                name="Show Password"
                id="Show Password"
              />
            </div>
            <div className="mb-12 ml-40">
              <Button className="w-10 h-12 text-center" theme="Primary">
                Get Started
              </Button>
              {isSubmitting && (
                <FaSpinner className="mt-6 animate-spin"></FaSpinner>
              )}
            </div>
          </div>
          <div className="mb-10">
            <p>
              © 2020 All Rights Reserved. CORK is a product of Designreset.
              Cookie Preferences, Privacy, and Terms.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

Signup.defaultProps = {};

export default memo(Signup);
