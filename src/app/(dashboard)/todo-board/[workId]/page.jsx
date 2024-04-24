import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import TodoCardComponent from "@/components/TodoCardComponent";
import { getAllTaskByWorkSpaceID } from "@/service/dashboard.service";
import React from "react";

const TodoBoard = async ({ params }) => {
  console.log(" parama:", params);
  const { workId } = params;
  const allTasks = await getAllTaskByWorkSpaceID(workId);
  console.log("All task card", allTasks);
  const getAllTaskByStatus = allTasks.data
    .map((item) => item.status)
    .filter(
      (value, index, currentStatus) => currentStatus.indexOf(value) === index
    );
  console.log("getAllTaskByStatus: ", getAllTaskByStatus);
  return (
    <div>
      <div className="flex p-4">
        <div className="w-full">
          <ListBoardComponentHeader workId={workId} />
          <div className="grid grid-cols-4 mt-5 gap-5">
            <div className="">
              <div>TODO</div>
              <div className=" bg-todo w-full h-1 rounded-sm"></div>
              <div className="">
                <TodoCardComponent allTasks={allTasks} />
              </div>
            </div>
            <div className="">
              <div>WORING ON</div>
              <div className=" bg-workingOn w-full h-1 rounded-sm"></div>
              <div className="">
                <TodoCardComponent />
              </div>
            </div>
            <div className="">
              <div>CHECKING</div>
              <div className=" bg-checking w-full h-1 rounded-sm"></div>
              <div className="">
                <TodoCardComponent />
              </div>
            </div>
            <div className="">
              <div>COMPLETE</div>
              <div className=" bg-completed w-full h-1 rounded-sm"></div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <AddNewTaskComponent workId={workId} />
      </div>
    </div>
  );
};

export default TodoBoard;
