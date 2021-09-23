import { ProcessInfo } from "./types"

export type Action<T> = {
    type: string;
    payload: T
}

export enum AppActions {
    Open = 'OpenApp',
    Close = 'CloseApp'
}

export const Actions = {
    Close: (processInfo: ProcessInfo): Action<ProcessInfo> => ({
        type: AppActions.Close,
        payload: processInfo
    }),
    Open: (processInfo: ProcessInfo): Action<ProcessInfo> => ({
        type: AppActions.Open,
        payload: processInfo
    })
}