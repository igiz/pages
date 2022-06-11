import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { Actions } from "../types/actions";
import { CvAppMain } from "../types/appconstants";
import { Dictionary } from "../types/interfaces";
import Console from "./Console";
import CvApp from "./CvApp";
import Folder from "./Folder";

export const AppLauncher: React.FC = () => {
    const { state, dispatch } = useContext(AppContext);
    const [apps, setApps] = useState<Dictionary<JSX.Element>>({})
    const [appRefs, setAppRefs] = useState<Dictionary<React.RefObject<HTMLDivElement>>>({});
    const focused = state.focused;

    useEffect(() => {
        if (focused && appRefs[focused]) {
            const ref = appRefs[focused];
            if (ref.current) {
                ref.current.style.zIndex = "1";
            }
        }

        Object.keys(appRefs)
            .filter(item => item !== focused)
            .forEach(item => {
                const ref = appRefs[item];
                if (ref.current) {
                    ref.current.style.zIndex = "0"
                }
            })
    }, [focused, appRefs])

    useEffect(() => {
        const running: Record<string, JSX.Element> = {}
        const refs: Record<string, React.RefObject<HTMLDivElement>> = {};
        for (var app in state.running) {
            const info = state.running[app];
            const ref = React.createRef<HTMLDivElement>();
            if (info.appId === CvAppMain.appId) {
                running[info.appId] =
                    <Console appInfo={info} dimensions={{ height: '450px', width: '950px' }} onFocus={() => dispatch(Actions.Focus(info))} ref={ref}>
                        <CvApp />
                    </Console>
            } else if (info.appId.startsWith("Folder:")) {
                running[info.appId] =
                    <Console appInfo={info} dimensions={{ height: '135px', width: '500px' }} onFocus={() => dispatch(Actions.Focus(info))} ref={ref}>
                        <Folder />
                    </Console>
            }
            refs[info.appId] = ref;
        }
        setAppRefs(refs);
        setApps(running)
    }, [state, dispatch])

    return <>
        {Object.keys(apps).map(item => apps[item])}
    </>;
}