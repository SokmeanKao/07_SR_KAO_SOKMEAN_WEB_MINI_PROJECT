import React from 'react'
import ListBoardComponentHeader from './ListBoardComponentHeader'
import TodoCardComponent from './TodoCardComponent'

const TodoBoardComponent = () => {
  return (
    <div>
      <div className="flex p-4">
      <div className="w-full">
        <ListBoardComponentHeader />
        <div className="grid grid-cols-4 mt-5 gap-5">
          <div className="">
            <div>TODO</div>
            <hr />
            <div className="">
              <TodoCardComponent />
              <TodoCardComponent />
            </div>
          </div>
          <div className="">
            <div>TODO</div>
            <hr />
            <div className="">
              <TodoCardComponent />
            </div>
          </div>
          <div className="">
            <div>TODO</div>
            <hr />
            <div className="">
              <TodoCardComponent />
            </div>
          </div>
          <div className="">
            <div>TODO</div>
            <hr />
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TodoBoardComponent
