import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { HiLockClosed } from "react-icons/hi";
import { HiAtSymbol } from "react-icons/hi";

interface Props {}

const Signup: FC<Props> = (props) => {
  return (
    <div className="px-12">
      <div>
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
      <form className="mt-8 space-y-6">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div className="flex py-3 border-t-0 border-b-2 border-l-0 border-r-0">
            <FiUser className="w-6 h-12 text-blue-500"></FiUser>
            <label htmlFor="Username" className="sr-only">
              Username
            </label>
            <input
              id="Username"
              name="Username"
              type="Username"
              autoComplete="Username"
              required
              className="relative block w-full px-3 py-2 text-gray-900 rounded-none appearance-none focus:outline-none rounded-t-md focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username"
            />
          </div>
          <div className="flex py-3 border-t-0 border-b-2 border-l-0 border-r-0">
            <HiAtSymbol className="w-6 h-12 text-blue-500"></HiAtSymbol>
            <label htmlFor="email" className="sr-only">
              email-=address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full px-3 py-2 text-gray-900 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
              placeholder="email"
            />
          </div>
          <div className="flex py-3 border-t-0 border-b-2 border-l-0 border-r-0">
            <HiLockClosed className="w-6 h-12 text-blue-500"></HiLockClosed>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="Current Password"
              required
              className="relative block w-full px-3 py-2 text-gray-900 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
              placeholder="Password"
            />
            <div>
              <label>I agree to the terms and conditions </label>
              <input type="checkbox" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

Signup.defaultProps = {};

export default memo(Signup);
