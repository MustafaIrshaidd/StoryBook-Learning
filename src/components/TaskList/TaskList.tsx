import React from "react";
import Task from "../Task";
import { TaskType } from "../Task/types";
import { Stack, Box, Skeleton, Typography } from "@mui/material";
import { TaskListProps } from "./types";

const TasksData = [
  {
    id: 1,
    title: "Default",
    type: TaskType.Default,
  },
  {
    id: 2,
    title: "Pinned",
    type: TaskType.Pinned,
  },
  {
    id: 3,
    title: "Archived",
    type: TaskType.Archived,
  },
];

export const TaskList = (TaskList: TaskListProps) => {
  const [loading, setLoading] = React.useState(TaskList.loading);
  const [completed, setCompleted] = React.useState(TaskList.completed);

  return (
    <Box width={"100%"} height={"100vh"}>
      <Stack
        height={"100vh"}
        width={"50%"}
        margin={"auto"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        gap={2}>
        {completed ? (
          <Typography>All Tasks Completed :{`)`}</Typography>
        ) : loading ? (
          TasksData.map(() => (
            <Skeleton height={"100px"} width={"100%"}></Skeleton>
          ))
        ) : (
          TasksData.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              type={task.type}
            />
          ))
        )}
      </Stack>
    </Box>
  );
};
