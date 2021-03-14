import React from "react";
import Lists from "./Lists"
export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete, onClickApi, resources, isGotten } = props;

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTodo</p>
      <button onClick={onClickApi}>APIから取得</button>
      <ul>
          <Lists
          isGotten={isGotten}
          incompleteTodos={incompleteTodos}
          resources={resources}
          onClickComplete={onClickComplete}
          onClickDelete={onClickDelete}
          />
          
      </ul>
    </div>
  );
};
