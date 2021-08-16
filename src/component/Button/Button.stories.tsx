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

const Template = (args: any) => <Button {...args}></Button>;

export const main: any = Template.bind({});
main.args = {
  children: "log In",
  type: "Submit",
  className: "",
  disabled:false, 
};

export default Xyz;
