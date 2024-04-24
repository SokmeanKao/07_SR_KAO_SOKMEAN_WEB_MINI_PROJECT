import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import TodoListComponent from "@/components/TodoListComponent";
import { getAllTaskByWorkSpaceID } from "@/service/dashboard.service";
import React from "react";

const TodoListPage = async ({ params }) => {
  const { workId } = params;
  const allTasks = await getAllTaskByWorkSpaceID(workId);
  console.log(allTasks)
  return (
    <div>
      <div className="flex p-4">
        <div className="w-7/12">
          <ListBoardComponentHeader workId={workId} />
          {allTasks.data.map((task) => (
            <TodoListComponent key={task.taskId} task={task}/>))}
        </div>
        <div className="w-5/12 pl-10">
          <MonthlyStatisticsComponent />
        </div>
      </div>
      <div className="flex justify-end">
        <AddNewTaskComponent workId={workId} />
      </div>
    </div>
  );
};

export default TodoListPage;
