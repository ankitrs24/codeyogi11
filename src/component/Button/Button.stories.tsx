import Button from "./Button";
import "../../index.css";

const Xyz = {
  title: "My Awesome Button",
  component: Button,
  argTypes: {
    theme: {
      control: { type: "select" },
    },
    backgroundcolor: {
      control: { type: "color" },
    },
  },
};

export const main = (args: any, args2: any) => {
  return (
    <>
      <Button {...args}></Button> <Button {...args2}></Button>
    </>
  );
};

main.args = {
  children: "primary",
};

main.args2 = {
  children: "secondary",
};
export default Xyz;
