import { ProcessInfo } from './types';

import consoleIcon from '../assets/console.svg';
import folderIcon from '../assets/folder.svg';

export const cvApp: ProcessInfo = { appId: 'cvApp', name: 'CvApp - Zygimantas Raugas', appLogo: consoleIcon };
export const folder = (path: string): ProcessInfo => ({ appId: `Folder:${path}`, name: path, appLogo: folderIcon });
