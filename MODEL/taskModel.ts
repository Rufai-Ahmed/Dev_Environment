import { Schema, Document, model } from "mongoose";

interface iTask {
  task: string;
  tasks: Array<string>;
}

interface iTaskData extends iTask, Document {}

const taskModel = new Schema(
  {
    task: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export default model<iTaskData>("tasks", taskModel);
