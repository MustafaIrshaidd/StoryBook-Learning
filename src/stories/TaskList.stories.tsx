import React from "react";
import { Meta, Story } from "@storybook/react";

import TaskList from "../components/TaskList";
import { TaskListProps } from "../components/TaskList/types";

export default {
  title: "Task List",
  component: TaskList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<TaskListProps> = (args): JSX.Element => <TaskList {...args} />;

export const Default: Story<TaskListProps> = Template.bind({});

export const Loading: Story<TaskListProps> = Template.bind({});
Loading.args = {
  loading:true
};

export const Completed: Story<TaskListProps> = Template.bind({});
Completed.args = {
  completed:true
};
