// import { createContext, Dispatch, ReactNode, useContext } from "react";
// import { ITask } from "./App2";
// import { ActionTypes, useTaskReducer } from "./TaskReducer";

// interface ITaskContext {
//   tasks: ITask[];
//   dispatch: Dispatch<ActionTypes>;
// }

// export const useTaskContext = () => {
//   const contextValues = useContext(TaskContext);
//   if (contextValues) {
//     return contextValues;
//   } else {
//     throw new Error("Cannot use useThemeContext outside ThemeContext provider");
//   }
// };

// const TaskContext = createContext<ITaskContext | null>(null);

// export const TaskContextProvider = ({ children }: { children: ReactNode }) => {
//   const [tasks, dispatch] = useTaskReducer();

//   return (
//     <TaskContext.Provider value={{ tasks, dispatch }}>
//       {children}
//     </TaskContext.Provider>
//   );
// };
