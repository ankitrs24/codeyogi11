import { InputHTMLAttributes } from "react";
import { FC, memo } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
  error?: string;
}

const Input: FC<Props> = ({touched, error,id, className,placeholder, ...rest }) => {
  return (
    <>
    <div>
        {id && placeholder && (<label htmlFor={id} className="sr-only">
          {placeholder}
        </label>
        )}
        <input 
          id= {id}           
           //name="email"
          type="email"
          // value={values.email}
          // onChange={handleChange}
          // onBlur={handleBlur}
          autoComplete="email"
          required
          {...rest}
          //{...getFieldProps("email")}
          className={"relative block w-full px-3 py-2 text-gray-900 rounded-none appearance-none focus:outline-none rounded-t-md focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" + className }
          placeholder = {placeholder}
        />
        </div>
      {touched && <div className="text-red-600">{error}</div>}
      </>
  );
};

Input.defaultProps = {};

export default memo(Input);
