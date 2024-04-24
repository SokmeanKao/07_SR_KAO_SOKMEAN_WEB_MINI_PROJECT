import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import WorkspacePopupComponent from "./WorkspacePopupComponent";
import { getAllWorkspaces } from "@/service/dashboard.service";
import Link from "next/link";
import { headers } from "next/headers";

export default async function SidebarComponent() {
  const workspace = await getAllWorkspaces();
  const headerList = headers();
  const url = headerList.get("x-current-path");

  console.log("Url path", url);

  return (
    <div className="pl-10 mt-6 h-screen">
      <div className="flex justify-between">
        <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
        <Image src={"/assets/icons/arrow.svg"} width={25} height={30} />
      </div>

      {/* workspace */}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">workspace</h1>
        <WorkspacePopupComponent />
      </div>

      {/* each workspace */}
      {workspace.data.map((w) => (
        <div key={w?.workSpaceId} className="flex items-center mt-5 w-full">
          <div className="rounded-full w-4 h-4 bg-todo"></div>
          <div className="flex justify-between w-full pl-3">
            <Link href={`${url}/${w?.workSpaceId}?sidebar=workspace`}>
              <p className=" font-bold">{w?.workspaceName}</p>
            </Link>
            <EditDeleteDropDownComponent workSpaceId={w?.workSpaceId} />
          </div>
        </div>
      ))}

      {/* favorite*/}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">favorite</h1>

        <Image src={"/assets/icons/favorite.svg"} width={22} height={22} />
      </div>

      {/* each favorite workspace */}
      {workspace.data.map((w) => {
        return w.isFavorite ? (
          <div key={w.workSpaceId} className="flex items-center mt-5 w-full">
            <div className="rounded-full w-4 h-4 bg-workingOn"></div>
            <div className="flex justify-between w-full pl-3">
              <p>{w.workspaceName}</p>
            </div>
          </div>
        ) : (
          " "
        );
      })}
    </div>
  );
}
