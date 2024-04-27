import { Middleware } from "redux";
import { RootState } from "./store";

export const loggerMiddleware: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState
> = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

export const myselfMiddleware: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState
> = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("myselfMiddleware");
  return result;
};
