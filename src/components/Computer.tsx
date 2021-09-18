import styled from 'styled-components';
import React from 'react';
import DesktopToolbar from './Toolbar';
import duck from '../assets/duck.svg';
import cursor from '../assets/cursor.svg';
import folder from '../assets/folder.svg';
import computer from '../assets/computer-shiny.svg';
import github from '../assets/github.svg';

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
    position: relative;
    height: ${props => props.height};
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
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(${props => props.columns}, 8%);
    grid-template-rows: repeat(${props => props.rows}, 8%);
    grid-auto-flow: column;
    grid-row-gap: 20pt;
    grid-column-gap: 20pt;
`;

const Link = styled.a <{ row?: number, column?: number }> `
    ${props => props.row ? `grid-row: ${props.row};` : ''}
    ${props => props.column ? `grid-column: ${props.column};` : ''}
    padding-left: 10pt;
    text-align: center;
`;

const Icon: React.FC<{ iconText: string, iconImage: string, link: string, column?: number, row?: number }> = ({ iconText, iconImage, link, row, column }) => {
    return <Link href={link} target='_blank' rel='noreferrer' row={row} column={column}>
        <IconImage src={iconImage} />
        <IconText>{iconText}</IconText>
    </Link>
}

const SystemLogo: React.FC = () => {
    return <Logo>
        <img src={duck} title='Quack' alt='Mr Duck' />
        <LogoText>QUACKOS 0.3</LogoText>
    </Logo>
}

const Computer: React.FC = ({ children }) => {
    const rows = 8;
    const columns = 10;

    return (
        <OperatingSystem>
            <Desktop>
                <DesktopToolbar height="6%" />
                <Wallpaper height="94%">
                    <SystemLogo />
                    <Grid rows={rows} columns={columns}>
                        <Icon iconText="Computer" iconImage={computer} link='' />
                        <Icon iconText="Super Secret" iconImage={folder} link='' />
                        <Icon iconText="Source Code" iconImage={github} link='https://github.com/igiz/pages/tree/master' row={rows} column={columns} />
                    </Grid>
                    {children}
                </Wallpaper>
            </Desktop >
        </OperatingSystem>
    )
}

export default Computer;
