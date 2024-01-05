import React, { memo } from "react";
import "./Lists.css";

export const Lists = memo((props) => {
  const { data, hendleEdit } = props;
  return (
    <ol className="todo-body">
      {data?.map((item) => {
        return (
          <li key={item.id}>
            <span>{item.title}</span>
            <button onClick={() => hendleEdit(item)}>Edit</button>
          </li>
        );
      })}
    </ol>
  );
});
