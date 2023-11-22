import { Checkbox, FormControlLabel, FormGroup, Stack } from "@mui/material";
import Rating from "@mui/material/Rating";
import React, { useState } from "react";
import { TaskType, TaskProps } from "./types";

export const Task: React.FC<TaskProps> = (Task:TaskProps) => {
  const [taskState, setTaskState] = useState({ archived: false, pinned: 0 });

  const toggleCheckbox = () => {
    setTaskState((prevState) => ({
      ...prevState,
      archived: !prevState.archived,
    }));
  };

  const togglePinned = () => {
    setTaskState((prevState) => ({
      ...prevState,
      pinned: prevState.pinned === 1 ? 0 : 1,
    }));
  };

  React.useEffect(() => {
    switch (Task.type) {
      case TaskType.Default:
        setTaskState({ archived: false, pinned: 0 });
        break;
      case TaskType.Pinned:
        setTaskState((prevState) => ({ ...prevState, pinned: 1 }));
        break;
      case TaskType.Archived:
        setTaskState((prevState) => ({ ...prevState, archived: true }));
        break;
    }
  }, [Task.type]);

  return (
    <Stack
      width={"100%"}
      padding={4}
      sx={{ backgroundColor: "#fafafa" }}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}>
      <Stack direction={"row"} justifyContent={"start"} alignItems={"center"}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={toggleCheckbox}
                checked={taskState.archived}
              />
            }
            label={Task.title || "Default"}
          />
        </FormGroup>
      </Stack>
      <Rating
        sx={{ visibility: taskState.archived === true ? "hidden" : "visible" }}
        onChange={togglePinned}
        value={taskState.pinned}
        max={1}
      />
    </Stack>
  );
};
