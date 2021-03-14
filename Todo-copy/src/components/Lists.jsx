import React from 'react';

const Lists = (props)=>{
  const {incompleteTodos,isGotten,onClickComplete,onClickDelete, resources} = props;

  //isGottenがtrueの時、todos(resourcesをmapで回して）のlistを作成する
  //isGottenがfalesの時、todos(inCompleteTodsをmapで回して)のlistを作成する
  if(isGotten){
    {incompleteTodos.map((incompleteTodo, index) => {
      return (
        <div key={incompleteTodo} className="list-row">
          <li>{incompleteTodo}</li>
          <button onClick={() => onClickComplete(index)}>完了</button>
          <button onClick={() => onClickDelete(index)}>削除</button>
        </div>
      );
    })}
  }else{
            {resources.map((resource, index) => {
          return (
            <div key={resource} className="list-row">
              <li>{resource}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
  }
  return(
    <div>


    </div>
    
  )
  }

  export default Lists