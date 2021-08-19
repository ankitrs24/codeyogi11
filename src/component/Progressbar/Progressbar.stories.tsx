import Progressbar from "./Progressbar";
import "../../index.css";

export default {
  title: "Progressbar",
  component: Progressbar,
  argTypes: {
    theme: {
      control: { type: "select" },
    },
    progress: {
      control: { type: "range", min: 0, max: 100, step: 0.01 },
    },
  },
};
export const Main = (args: any) => <Progressbar {...args}></Progressbar>;

Main.args = {
  progress: 10,
  theme: "primary",
};
