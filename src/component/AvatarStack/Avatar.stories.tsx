import AvatarStack from "./AvatarStack";
import "../../index.css";

export default {
  title: "AvatarStack",
  component: AvatarStack,
  argTypes: {
    status: {
      control: { type: "select" },
    },
  },
};

export const Main = (args: any) => <AvatarStack {...args}></AvatarStack>;

Main.args = {};
