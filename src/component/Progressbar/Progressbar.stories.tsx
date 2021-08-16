import Progressbar from "./Progressbar";
import "../../index.css";

export default {
  title: "Progressbar",
  component: Progressbar,
  argTypes:{
      theme:{
          control:{type:'select'},
      },
  },
  }; 
export const Main = (args: any) => <Progressbar {...args}></Progressbar>;

Main.args={
   };
