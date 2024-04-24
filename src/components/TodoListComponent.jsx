import React from "react";
import ListBoardComponentHeader from "./ListBoardComponentHeader";
import MonthlyStatisticsComponent from "./MonthlyStatisticsComponent";
import AddNewTaskComponent from "./AddNewTaskComponent";

const TodoListComponent = ({ task }) => {
  const timestamp = new Date(task.dueDate);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = days[timestamp.getDay()];
  function getStatusMeaning(status) {
    if (status === 1) {
        return "todo";
    } else if (status === 2) {
        return "working on";
    } else if (status === 3) {
        return "checking";
    } else if (status === 4) {
        return "completed";
    } else {
        return "unknown"; // or handle invalid status
    }
}
  return (
    <div>
      <div key={task.taskId} className=" h-32 bg-green-500 mt-5 rounded-lg">
        <div className="h-full flex p-5 gap-5">
          <div className="w-2/12 bg-white rounded-lg flex flex-col justify-center items-center">
            <h2 className=" text-red-500 text-2xl">{dayOfWeek}</h2>
            <h2>25</h2>
          </div>
          <div className="w-8/12 flex flex-col justify-center">
            <h2 className=" font-bold">{task.taskTitle}</h2>
            <p>{task.description}</p>
          </div>
          <div className="w-2/12 flex flex-col justify-end">
            <div className="bg-white rounded-lg  text-center">
              <p>{getStatusMeaning(task.status)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoListComponent;
