import styled from 'styled-components';
import React, { useContext } from 'react';

/** Third party imports above**/
import DesktopToolbar from './Toolbar';
import duck from '../assets/duck.svg';
import cursor from '../assets/cursor.svg';
import folderIcon from '../assets/folder.svg';
import computer from '../assets/computer-shiny.svg';
import github from '../assets/github.svg';
import console from '../assets/console.svg';
import capybara from '../assets/capybara.svg';
import { AppContext } from '../contexts/AppContext';
import { Actions } from '../types/actions';
import { cvApp, folder, happyCappy } from '../types/appconstants';

const OperatingSystem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 1280px;
    height: 720px;
`;

const Desktop = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    background-color: #111010;
    cursor: url(${cursor}) , auto;
`;

const Wallpaper = styled.div<{ height: string }>`
    display: flex;
    position: relative;
    height: ${(props) => props.height};
    width: 100%;
`;

const LogoText = styled.p`
    align-self: flex-end;
    color: #8D8080;
    white-space: nowrap;
`;

const Logo = styled.div`
    font-size: 22pt;
    display: flex;
    position: absolute;
    bottom: 0;
    padding-bottom: 2%;
    padding-left: 0%;
`;

const IconImage = styled.img`
    width: 70%;
    height: 70%;
`;

const IconText = styled.p`
    color: white;
    margin: 0;
`;

const Grid = styled.div<{ rows: number, columns: number }>`
    position: absolute;
    display: grid;
    text-align: center;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-content: center;
    grid-template-columns: repeat(${(props) => props.columns}, ${(props) => (100 - (props.columns * 2)) / props.columns}%);
    grid-template-rows: repeat(${(props) => props.rows}, ${(props) => (100 - (props.rows * 2)) / props.rows}%);
    grid-auto-flow: column;
    grid-row-gap: 2%;
    grid-column-gap: 2%;
`;

const Link = styled.a <{ row?: number, column?: number }> `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    ${(props) => props.row ? `grid-row: ${props.row};` : ''}
    ${(props) => props.column ? `grid-column: ${props.column};` : ''}
    text-align: center;
    user-select: none;

    :hover {
        border: 1px dashed #3d3d3d;
        border-radius: 0.25em;
        cursor: pointer;
    }
`;

const RotatingImage = styled.img`
    filter: drop-shadow(5px 2.5px 1px);
    animation: flip 10s steps(360) infinite;
    @keyframes flip {
        from {
            transform: rotate3d(0, 1, 0, 0deg);
        }
        to {
            transform: rotate3d(0, 1, 0, -360deg);
        }
    }
`;

const Icon: React.FC<{ iconText: string, iconImage: string, link?: string, action?: () => void, column?: number, row?: number }> = ({ iconText, iconImage, row, column, link, action }) => {
    return <Link href={link} onClick={action} target='_blank' rel='noreferrer' row={row} column={column}>
        <IconImage src={iconImage} />
        <IconText>{iconText}</IconText>
    </Link>;
};

const SystemLogo: React.FC = () => {
    return <Logo>
        <RotatingImage src={duck} title='Quack' alt='Mr Duck' />
        <LogoText>QUACKOS 0.3</LogoText>
    </Logo>;
};

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: list-item;
`;

const Computer: React.FC<{ dimensions: { rows: number, columns: number } }> = ({ children, dimensions }) => {
    const { dispatch } = useContext(AppContext);

    return (
        <OperatingSystem>
            <Desktop>
                <DesktopToolbar height="6%" />
                <Wallpaper height="94%">
                    <SystemLogo />
                    <Grid rows={dimensions.rows} columns={dimensions.columns}>
                        <Icon iconText='Computer' iconImage={computer} />
                        <Icon iconText='Super Secret' iconImage={folderIcon} action={() => dispatch(Actions.open(folder('Super Secret')))} />
                        <Icon iconText='CV App' iconImage={console} action={() => dispatch(Actions.open(cvApp))} />
                        <Icon iconText='Happy Cappy' iconImage={capybara} action={() => dispatch(Actions.open(happyCappy))} column={dimensions.columns} />
                        {/** Push to the very end of the grid**/}
                        <Icon iconText="Source Code" iconImage={github} link={'https://github.com/igiz/pages/tree/master'} row={dimensions.rows} column={dimensions.columns} />
                    </Grid>
                    <AppContainer>
                        {children}
                    </AppContainer>
                </Wallpaper>
            </Desktop >
        </OperatingSystem>
    );
};

export default Computer;
