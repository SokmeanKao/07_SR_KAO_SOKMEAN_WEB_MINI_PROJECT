import { getWorkSpaceById } from "@/service/dashboard.service";
import Image from "next/image";
import React from "react";
import FavoriteButton from "./FavoriteButton";

export default async function ListBoardComponentHeader({workId}) {
  console.log('first',workId)
  const workSpaceById = await getWorkSpaceById(workId);
  console.log("workSpaceById", workSpaceById.data.workspaceName)
  return (
    <>
      <div className="text-gray flex text-lg gap-3 mb-5">
        <p>Workspace</p> / <p>{workSpaceById.data.workspaceName}</p> / <p>List</p>
      </div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{workSpaceById.data.workspaceName}</h2>
        <FavoriteButton/>
      </div>
    </>
  );
}
