"use server";
import {
  createTask,
  createWorkSpaces,
  deleteWorkSpanceService,
} from "@/service/dashboard.service";
import { revalidateTag } from "next/cache";

// server action insert workspace
export async function handlerWorkSpace(workspace) {
  // define object structure
  const newWorkSpace = {
    workspaceName: workspace.get("workspaceName"),
  };

  // calling server for insert workspace
  await createWorkSpaces(newWorkSpace);

  // calling tag for real-time update
  revalidateTag("workspace");
}
export async function handlerFavoriteWorkSpace(workspace) {
  // define object structure
  const newWorkSpace = {
    isFavorite: workspace.get("isFavorite"),
  };

  // calling server for insert workspace
  await createWorkSpaces(newWorkSpace);

  // calling tag for real-time update
  revalidateTag("workspace");
}
// server action for delete workspace
export async function deleteWorkSpaceAction(workSpaceId) {
  await deleteWorkSpanceService(workSpaceId);
  revalidateTag("workspace");
}

// server action insert task
export async function handlerTask(task) {
  console.log("taskLL",task.get("title"))
  const newTask = {
    workSpaceId: task.get("workSpaceId"),
    title: task.get("title"),
    description: task.get("description"),
    tag: task.get("tag"),
    dueDate: task.get("dueDate"),
  };

  // calling server for insert workspace
  await createTask(newTask);

  // calling tag for real-time update
  revalidateTag("task");
}
