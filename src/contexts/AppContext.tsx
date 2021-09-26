import React, { createContext, useReducer, useState } from "react";
import { Action, AppActions } from "../types/actions";
import { Dictionary, IAppContext, IAppState } from "../types/interfaces";
import { ProcessInfo } from "../types/types";

export const AppContext = createContext<IAppContext>({} as IAppContext);

const useAppReducer = () => {
    const init = (open: Dictionary<ProcessInfo>): IAppState => ({ running: open });
    const reducer = (state: IAppState, action: Action<ProcessInfo>) => {
        const newState: IAppState = { running: { ...state.running } }
        switch (action.type) {
            case AppActions.Open:
                newState.running[action.payload.appId] = action.payload;
                break;
            case AppActions.Close:
                delete newState.running[action.payload.appId];
                break;
            default:
                throw new Error();
        }

        return newState;
    }
    return useReducer(reducer, {} as Dictionary<ProcessInfo>, init);
}

export const AppContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useAppReducer();
    const [focused, setFocused] = useState<string>();

    return <AppContext.Provider value={{
        isOpen: (appId: string) => state.running[appId] !== undefined,
        state,
        focused,
        dispatch,
        setFocused
    }}>
        {children}
    </AppContext.Provider>
}