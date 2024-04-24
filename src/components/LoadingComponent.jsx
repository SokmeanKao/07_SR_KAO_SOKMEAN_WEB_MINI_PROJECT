import React from "react";
import style from "./styles/style.module.css"

const LoadingComponent = () => {
  return (
    <div>
      <div className="w-[80%] m-auto h-lvh">
        <div className="h-full flex flex-row justify-center items-center">
          <div className={style.loader}>
            <svg viewBox="0 0 80 80">
              <circle r="32" cy="40" cx="40" id="test"></circle>
            </svg>
          </div>

          <div className={style.loader}>
            <svg viewBox="0 0 86 80">
              <polygon points="43 8 79 72 7 72"></polygon>
            </svg>
          </div>

          <div className={style.loader}>
            <svg viewBox="0 0 80 80">
              <rect height="64" width="64" y="8" x="8"></rect>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
