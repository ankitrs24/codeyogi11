import { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { HiUser, HiLockClosed } from "react-icons/hi";
import { FaSpinner } from "react-icons/fa";
//import { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../component/Input/Input";
import Button from "../component/Button/Button";

interface Props {}

const Login: FC<Props> = (props) => {
  //const [data, setData] = useState({ email: "", password: "" });
  //const [touched, setTouched] = useState({ email: false, password: false });
  //const [submitting, setSubmitting] = useState(false);

  const history = useHistory();
  const {
    handleSubmit,
    getFieldProps,
    //handleChange,
    //handleBlur,
    //values,
    touched,
    isSubmitting,
    errors,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup
      .object()
      .required()
      .shape({
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

  //const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //const nameOfChangeInput = event.target.name;
  //setData({ ...data, [nameOfChangeInput]: event.target.value });
  //};

  //const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
  // const nameOfBlurredInput = event.target.name;
  //setTouched({ ...touched, [nameOfBlurredInput]: true });
  //};

  //let emailError = "";
  //let passwordError = "";

  //const emailValidator = yup.string().required().email();

  //const passwordValidator = yup.string().required().min(8);

  //const negArr= yup.array().required().of(yup.number().negative());

  //const formValidator = yup.object().shape({
  // email: yup.string().required().email(),
  // password: yup.string().required().min(8),
  //});

  // try {
  //   formValidator.validateSync(data);
  // } catch (e) {
  //   console.log(e.message);
  // }

  // console.log(
  // "isFormValid", formValidator.isValidSync(data)
  // );

  //console.log(
  //"Negative Array validator",
  //negArr.isValidSync(undefined),
  //negArr.isValidSync([]),
  //negArr.isValidSync([5]),
  // negArr.isValidSync([10, 20]),
  //negArr.isValidSync([10, -20]),
  //negArr.isValidSync([-10, -20, -30])
  //);

  //console.log(
  //"email validator",
  // emailValidator.isValidSync(""),
  //emailValidator.isValidSync("undefined"),
  //emailValidator.isValidSync("hello"),
  //emailValidator.isValidSync("5"),
  // emailValidator.isValidSync("hello@gmail.com"),
  //emailValidator.isValidSync("hi@codeyogi.io"),
  //);

  // console.log(
  //  "password validator",
  // passwordValidator.isValidSync(""),
  // passwordValidator.isValidSync("undefined"),
  //  passwordValidator.isValidSync("hello"),
  // passwordValidator.isValidSync("5"),
  // passwordValidator.isValidSync("helloworld"),
  // passwordValidator.isValidSync("hello@gmail.com")
  // );

  //if (!data.email) {
  // emailError = "Email address is required";
  //} else if (!data.email.endsWith("@gmail.com")) {
  //emailError = "please enter a valid email address";
  //}

  // if (!data.password) {
  // passwordError = "Password is required";
  //} else if (data.password.length < 8) {
  // passwordError = "Password should be atleast 8 characters";
  // }

  return (
    <div className="flex min-h-screen sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-5xl text-left text-black font-semi-bold ">
          Log In to <span className="text-indigo-700">Codeyogi</span>
        </h1>
        <p>
          New Here?
          <span>
            <Link to="/Signup" className="text-blue-500 underline text-bold">
              Create an account
            </Link>
          </span>
        </p>
        <div className="-space-y-px rounded-md shadow-sm">
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="flex py-3 border-t-0 border-b-2 border-l-0 border-r-0">
              <HiUser className="w-6 h-12 text-blue-500"></HiUser>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                required
                touched={touched.email}
                error={errors.email}
                {...getFieldProps("email")}
                placeholder="Username"
              />
            </div>
            <div className="flex py-3 border-t-0 border-b-2 border-l-0 border-r-0">
              <HiLockClosed className="w-6 h-12 text-blue-500"></HiLockClosed>
              <Input
                id="password"
                type="password"
                autoComplete="Current Password"
                required
                touched={touched.password}
                error={errors.password}
                {...getFieldProps("password")}
                placeholder="Password"
              />
            </div>
            <div className="flex justify-between">
              <div>
                <label className="pt-4 text-black ">Show Password</label>
                <input
                  type="checkbox"
                  name="Show Password"
                  id="Show Password"
                />
              </div>
              <div>
                <Button
                  className="justify-between w-10 h-12 text-center"
                  theme="Secondary"
                >
                  Log In
                </Button>
                {isSubmitting && (
                  <FaSpinner className="mt-6 animate-spin"></FaSpinner>
                )}
              </div>
            </div>
            <div className="text-center">
              <div>
                <label>Keep me logged in </label>
                <input type="checkbox" />
              </div>
              <Link to="/RecoveryPassword" className="p-6 text-blue-600">
                Forgot Password ?
              </Link>
            </div>
            <div className="mb-10">
              <p>
                © 2020 All Rights Reserved. CORK is a product of Designreset.
                Cookie Preferences, Privacy, and Terms.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);
