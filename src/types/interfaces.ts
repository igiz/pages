import { Dispatch } from 'react';
import { Action } from './actions';
import { ProcessInfo } from './types';

export interface IAppState {
    running: Record<string, ProcessInfo>
    focused: string | undefined;
};

export interface IAppContext {
    baseUrl: string;
    isOpen: (appId: string) => boolean;
    state: IAppState;
    dispatch: Dispatch<Action<any>>
};
