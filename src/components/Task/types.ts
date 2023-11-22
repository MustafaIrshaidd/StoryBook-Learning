export enum TaskType {
  Default,
  Pinned,
  Archived,
}

export type TaskProps = {
  type?: TaskType;
  title: string;
  id: number;
};
