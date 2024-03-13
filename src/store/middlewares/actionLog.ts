import { Middleware } from "redux";

export const actionLog: Middleware = (store) => (next) => (action) => {
  console.log("state 当前", store.getState());
  console.log("fire action ", action);
  next(action);
  console.log("state 更新", store.getState());
};
