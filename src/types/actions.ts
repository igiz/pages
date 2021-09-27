import { ProcessInfo } from "./types"

export type Action<T> = {
    type: string;
    payload: T
}

export enum AppActions {
    Open = 'OpenApp',
    Close = 'CloseApp',
    Focus = 'Focus'
}

export const Actions = {
    Close: (processInfo: ProcessInfo): Action<ProcessInfo> => ({
        type: AppActions.Close,
        payload: processInfo
    }),
    Open: (processInfo: ProcessInfo): Action<ProcessInfo> => ({
        type: AppActions.Open,
        payload: processInfo
    }),
    Focus: (processInfo: ProcessInfo): Action<ProcessInfo> => ({
        type: AppActions.Focus,
        payload: processInfo
    })
}