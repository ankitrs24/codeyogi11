import AvatarStack from "./AvatarStack";
import "../../index.css";

export default {
  title: "AvatarStack",
  component: AvatarStack,
  argTypes: {
    statusArray: {
      control: { type: "select" },
    },
  },
};

export const Main = (args: any) => <AvatarStack {...args}></AvatarStack>;

Main.args = {
  threshold: 4,
  srcArray: [
    "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",
    "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",
    "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",
    "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",
  ],
};
