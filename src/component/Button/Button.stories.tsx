import Button from "./Button";
import "../../index.css";

const Xyz = {
  title: "My Awesome Button",
  component: Button,
  argTypes: {
    theme: {
      control: { type: "select" },
    },
  },
};

export const main = (args: any) => <Button {...args}></Button>;

main.args = {
  children: "primary",
};
export default Xyz;
