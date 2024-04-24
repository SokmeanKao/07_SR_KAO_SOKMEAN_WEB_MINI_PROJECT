import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";

export default async function TodoCardComponent({ allTasks }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid date";
    }
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    return formattedDate;
  }
  return (
    <div>
      {allTasks?.data?.map((task) => (
        <div
          key={task?.taskId}
          className="border border-gray rounded-lg mt-5 relative"
        >
          <div className="p-5">
            <div className="flex justify-between">
              <p>{task?.taskTitle}</p>
              <div className="absolute top-2 right-3">
                {/* <Image
               src={"/assets/icons/tabler_dots.svg"}
               width={20}
               height={20}
               alt={"edit delete card"}
             /> */}
                <EditDeleteDropDownComponent />
              </div>
            </div>

            <p className="text-gray">{task?.description}</p>
            <div className="flex justify-between items-center mt-5">
              <div className="bg-bgTag text-colorTag py-1 px-5 rounded-lg font-bold">
                {task?.tag}
              </div>
              <div className="rounded-full w-5 h-5 bg-todo"></div>
            </div>
          </div>

          <hr className="text-gray" />
          <div className="flex gap-2 justify-end pr-3 py-2">
            <Image
              src={"/assets/icons/calendar.svg"}
              width={20}
              height={20}
              alt="calendar icon"
            />
            <p className="text-gray">{formatDate(task?.dueDate)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
