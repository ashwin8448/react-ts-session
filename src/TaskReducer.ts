import { useReducer } from "react";
import { ITask } from "./App_TodoList";

export type ActionTypes =
  | {
      type: "add new task";
      payload: ITask;
    }
  | {
      type: "update task";
      payload: ITask["taskID"];
    };

const reducer = (state: ITask[], action: ActionTypes) => {
  switch (action.type) {
    case "add new task":
      return [...state, action.payload];
    case "update task":
      state[action.payload - 1].status = "completed";
      return [...state];
    default:
      return state;
  }
};

export const useTaskReducer = () => {
  return useReducer(reducer, []);
};
