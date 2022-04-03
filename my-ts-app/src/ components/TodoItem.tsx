import React from "react";
import { Todo } from "../models/Todo";

const TodoItem: React.FC<{ todo: Todo; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return <li onClick={() => props.onRemoveTodo(props.todo.id)}>{props.todo.text}</li>;
};

export default TodoItem;
