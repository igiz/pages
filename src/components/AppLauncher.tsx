import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { CvAppMain } from "../types/appconstants";
import Console from "./Console";
import CvApp from "./CvApp";
import Folder from "./Folder";

export const AppLauncher: React.FC = () => {
    const { state } = useContext(AppContext);
    const apps: JSX.Element[] = [];
    for (var app in state.running) {
        const info = state.running[app];

        if (info.appId === CvAppMain.appId) {
            apps.push(
                <Console appInfo={CvAppMain} dimensions={{ height: '450px', width: '950px' }}>
                    <CvApp />
                </Console>
            )
        } else if (info.appId.startsWith("Folder:")) {
            apps.push(
                <Console appInfo={info} dimensions={{ height: '135px', width: '500px' }}>
                    <Folder />
                </Console>
            )
        }
    }
    return <>{apps}</>;
}