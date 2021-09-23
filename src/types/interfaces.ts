import { Dispatch } from "react";
import { Action } from "./actions";
import { ProcessInfo } from "./types";

export interface Dictionary<T> {
    [Key: string]: T;
}

export interface IAppState {
    running: Dictionary<ProcessInfo>
}

export interface IAppContext {
    isOpen: (appId: string) => boolean;
    state: IAppState;
    dispatch: Dispatch<Action<any>>
}