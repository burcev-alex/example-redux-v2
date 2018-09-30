import { createStore } from "redux";
import { initialStat, rootReducers } from "../reducers";

export const store = createStore(rootReducers, initialStat);
