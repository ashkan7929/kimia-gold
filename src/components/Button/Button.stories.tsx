// Button.stories.tsx
import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "success", "danger", "outline"],
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "ورود به اپلیکیشن",
    variant: "primary",
  },
};

export const Disabled: Story = {
  args: {
    children: "غیرفعال",
    disabled: true,
  },
};

export const Danger: Story = {
  args: {
    children: "حذف",
    variant: "danger",
  },
};

export const Success: Story = {
  args: {
    children: "تایید",
    variant: "success",
  },
};

export const Outline: Story = {
  args: {
    children: "جزئیات",
    variant: "outline",
  },
};
