import React, { createContext, useReducer, useState } from 'react';
import { Action, AppActions } from '../types/actions';
import { IAppContext, IAppState } from '../types/interfaces';
import { ProcessInfo } from '../types/types';

export const AppContext = createContext<IAppContext>({} as IAppContext);

const useAppReducer = () => {
    const init = (open: Record<string, ProcessInfo>): IAppState => ({ running: open, focused: undefined });
    const reducer = (state: IAppState, action: Action<ProcessInfo>) => {
        const newState: IAppState = { running: { ...state.running }, focused: state.focused };
        const appId = action.payload.appId;
        switch (action.type) {
        case AppActions.Open:
            newState.running[appId] = action.payload;
            newState.focused = appId;
            break;
        case AppActions.Close:
            delete newState.running[action.payload.appId];
            newState.focused = newState.running[Object.keys(newState.running)[0]]?.appId ?? undefined;
            break;
        case AppActions.Focus:
            newState.focused = appId;
            break;
        default:
            throw new Error();
        }

        return newState;
    };
    return useReducer(reducer, {} as Record<string, ProcessInfo>, init);
};

export const AppContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useAppReducer();
    const [baseUrl] = useState(window.location.origin);// Need a better way to set the base uri

    return <AppContext.Provider value={{
        baseUrl,
        isOpen: (appId: string) => state.running[appId] !== undefined,
        state,
        dispatch,
    }}>
        {children}
    </AppContext.Provider>;
};
