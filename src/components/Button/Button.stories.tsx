import  Button  from "./Button";
import type { Meta, StoryObj } from "@storybook/react";



const meta: Meta<typeof Button> = {
	title: "component/Button",
	component: Button,
	args: {children: "ورود به اپلیکیشن"},


}

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};   
export const Disabled: Story = { args: { disabled: true, children: "غیرفعال" } };