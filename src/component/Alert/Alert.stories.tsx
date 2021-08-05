import Alert from "./Alert";
import "../../index.css";

const Xyz = {
  title: "Showing Alerts",
  component: Alert,
  argTypes: {
     theme: {
         control: {type:"select"},
     },
  },
};

export const main = (args: any) => <Alert {...args}></Alert>;

main.args={
    children: "Lorem Ipsum is simply dummy text of the printing",
    className:" ",
    
};
export default Xyz;
