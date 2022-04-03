import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import {TodosContext} from '../store/todos-context';

const Todos: React.FC = (
  props
) => {

  const todosCtx = useContext(TodosContext);

  return (
    <ul>
      {todosCtx.items.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onRemoveTodo={todosCtx.remove} />
      ))}
    </ul>
  );
};

export default Todos;
