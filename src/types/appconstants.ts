import { ProcessInfo } from "./types";

import console from "../assets/console.svg";
import folder from "../assets/folder.svg";

export const CvAppMain: ProcessInfo = { appId: "cvApp", name: "CvApp - Zygimantas Raugas", appLogo: console }
export const Folder = (path: string): ProcessInfo => ({ appId: `Folder:${path}`, name: path, appLogo: folder })