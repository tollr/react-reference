import React, { useState } from "react";
import { Todo } from "../models/Todo";

type TodosContextObj = {
  items: Todo[];
  add: (text: string) => void;
  remove: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  add: () => {},
  remove: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prev) => [...prev, { id: new Date().toISOString(), text: text }]);
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const contextValue: TodosContextObj = {
    items: todos,
    add: addTodoHandler,
    remove: removeTodoHandler
  }

  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
}

export default TodosContextProvider;
