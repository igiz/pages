import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../contexts/AppContext';
import { Actions } from '../types/actions';
import { cvApp, happyCappy } from '../types/appconstants';
import Console from './Console';
import CvApp from './apps/cvapp/CvApp';
import Folder from './Folder';
import HappyCappy from './apps/HappyCappy';

export const AppLauncher: React.FC = () => {
    const { state, dispatch } = useContext(AppContext);
    const [apps, setApps] = useState<Record<string, JSX.Element>>({});
    const [appRefs, setAppRefs] = useState<Record<string, React.RefObject<HTMLDivElement>>>({});
    const focused = state.focused;

    useEffect(() => {
        if (focused && appRefs[focused]) {
            const ref = appRefs[focused];
            if (ref.current) {
                ref.current.style.zIndex = '1';
            }
        }

        Object.keys(appRefs)
            .filter((item) => item !== focused)
            .forEach((item) => {
                const ref = appRefs[item];
                if (ref.current) {
                    ref.current.style.zIndex = '0';
                }
            });
    }, [focused, appRefs]);

    useEffect(() => {
        const running: Record<string, JSX.Element> = {};
        const refs: Record<string, React.RefObject<HTMLDivElement>> = {};
        for (const app in state.running) {
            if (state.running.hasOwnProperty(app)) {
                const info = state.running[app];
                const ref = React.createRef<HTMLDivElement>();
                if (info.appId === cvApp.appId) {
                    running[info.appId] =
                        <Console appInfo={info} dimensions={{ height: '450px', width: '950px' }} onFocus={() => dispatch(Actions.focus(info))} ref={ref}>
                            <CvApp />
                        </Console>;
                } else if (info.appId == happyCappy.appId) {
                    running[info.appId] = <Console appInfo={info} dimensions={{ height: '300px', width: '650px' }} onFocus={() => dispatch(Actions.focus(info))} ref={ref}>
                        <HappyCappy />
                    </Console>;
                } else if (info.appId.startsWith('Folder:')) {
                    running[info.appId] =
                        <Console appInfo={info} dimensions={{ height: '135px', width: '500px' }} onFocus={() => dispatch(Actions.focus(info))} ref={ref}>
                            <Folder />
                        </Console>;
                }
                refs[info.appId] = ref;
            }
        }
        setAppRefs(refs);
        setApps(running);
    }, [state, dispatch]);

    return <>
        {Object.keys(apps).map((item) => apps[item])}
    </>;
};
