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
    focused: string | undefined;
    dispatch: Dispatch<Action<any>>
    setFocused: (appId: string) => void;
}