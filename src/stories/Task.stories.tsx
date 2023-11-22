import React from "react";
import { Meta, Story } from "@storybook/react";
import Task from "../components/Task";
import { TaskProps, TaskType } from "../components/Task/types";

export default {
  title: "Task",
  component: Task,
  tags: ['autodocs'],
} as Meta;

const Template: Story<TaskProps> = (args): JSX.Element => <Task {...args} />;

export const Default: Story<TaskProps> = Template.bind({});
Default.args = {
  type: TaskType.Default,
};

export const Pinned: Story<TaskProps> = Template.bind({});
Pinned.args = {
  type: TaskType.Pinned,
  title:"Pinned",
  id:1
};

export const Archived: Story<TaskProps> = Template.bind({});
Archived.args = {
  type: TaskType.Archived,
  title:"Archived",
  id:1
};