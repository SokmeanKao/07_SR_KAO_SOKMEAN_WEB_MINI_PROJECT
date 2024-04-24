import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";

//Get todo workspaces
export const getAllWorkspaces = async () => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/todo/v1/workspaces`,
    {
      headers: header,
    },
    {
      cache: "no-store",
      next: { tags: ["workspace"] },
    }
  );
  const data = res.json();
  return data;
};

//Get todo workspaces
export const getWorkSpaceById = async (workSpaceId) => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/todo/v1/workspace/${workSpaceId}`,
    {
      headers: header,
    },
    {
      cache: "no-store",
      next: { tags: ["workspace"] },
    }
  );
  const data = res.json();
  return data;
};

//create todo workspaces
export const createWorkSpaces = async (workSpace) => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/todo/v1/workspaces`, {
    method: "POST",
    body: JSON.stringify({
      workspaceName: workSpace.workspaceName,
    }),
    headers: header,
  });
  const data = res.json();
  return data;
};

// delete workspace
export const deleteWorkSpanceService = async (workSpaceId) => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/todo/v1/workspaces/${workSpaceId}`, {
    method: "DELETE",
    headers: header,
  });
  const data = res.json();
  return data;
};

//Get tasks by todo workspace Id
export const getAllTaskByWorkSpaceID = async (workId) => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/todo/v1/tasks?workspaceId=${workId}`,
    {
      headers: header,
    },
    {
      cache: "no-store",
      next: { tags: ["task"] },
    }
  );
  const data = res.json();
  return data;
};

//create todo workspaces
export const createTask = async (taskInfo) => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/todo/v1/tasks`, {
    method: "POST",
    body: JSON.stringify({
      taskTitle: taskInfo.title,
      description: taskInfo.description,
      startDate: "2024-04-18",
      dueDate: taskInfo.dueDate,
      tag: taskInfo.tag,
      status: 1,
      workspaceId: taskInfo.workSpaceId,
    }),
    headers: header,
  });
  const data = res.json();
  return data;
};

//update work space favorite      
export const updateFavoriteWorkSpace = async (workSpaceId) => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/todo/v1/workspaces/add-to-favorite/${workSpaceId}`,
    {
      method: "POST",
      body: JSON.stringify({
        isFavorite: workSpaceId.isFavorite
      }),
      headers: header,
    }
  );
  const data = res.json();
  return data;
};
