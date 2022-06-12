/* eslint-disable no-unused-vars */
import { ProcessInfo } from './types';

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
    close: (processInfo: ProcessInfo): Action<ProcessInfo> => ({
        type: AppActions.Close,
        payload: processInfo,
    }),
    open: (processInfo: ProcessInfo): Action<ProcessInfo> => ({
        type: AppActions.Open,
        payload: processInfo,
    }),
    focus: (processInfo: ProcessInfo): Action<ProcessInfo> => ({
        type: AppActions.Focus,
        payload: processInfo,
    }),
};
