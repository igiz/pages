import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { CvAppMain } from "../types/appconstants";
import Console from "./Console";
import CvApp from "./CvApp";

export const AppLauncher: React.FC = () => {
    const { state } = useContext(AppContext);
    const apps: JSX.Element[] = [];
    for (var app in state.running) {
        const info = state.running[app];
        switch (info.appId) {
            case CvAppMain.appId:
                apps.push(
                    <Console appInfo={CvAppMain} dimensions={{ height: '450px', width: '950px' }}>
                        <CvApp />
                    </Console>
                )
                break;
        }
    }
    return <>{apps}</>;
}