import styled from 'styled-components';
import React from 'react';
import DesktopToolbar from './Toolbar';
import duck from '../assets/duck.svg';
import cursor from '../assets/cursor.svg';
import folder from '../assets/folder.svg';
import computer from '../assets/computer-shiny.svg';

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

const Wallpaper = styled.div`
    position: relative;
    height: 94%;
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

const Grid = styled.div`
    position: absolute;
    display: grid;
    width: 100%;
    height: 100%;
    padding: 1% 0 0 2%;
    grid-template-columns: repeat(10, 8%);
    grid-template-rows: repeat(8, 9%);
    grid-auto-flow: column;
    grid-row-gap: 4%;
    grid-column-gap: 2%;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Icon: React.FC<{ iconText: string, iconImage: string }> = ({ iconText, iconImage }) => {
    return <FlexContainer>
        <IconImage src={iconImage} />
        <IconText>{iconText}</IconText>
    </FlexContainer>
}

const SystemLogo: React.FC = () => {
    return <Logo>
        <img src={duck} title='Quack' alt='Mr Duck' />
        <LogoText>QUACKOS 0.3</LogoText>
    </Logo>
}

const Computer: React.FC = ({ children }) => {
    return (
        <OperatingSystem>
            <Desktop>
                <DesktopToolbar />
                <Wallpaper>
                    <SystemLogo />
                    <Grid>
                        <Icon iconText="Computer" iconImage={computer} />
                        <Icon iconText="Super Secret" iconImage={folder} />
                    </Grid>
                    {children}
                </Wallpaper>
            </Desktop >
        </OperatingSystem>
    )
}

export default Computer;
