import React from 'react';
import styled from "styled-components";

const Frame = styled.div<{ color: string, frameOutline: string }>`
    align-content: center;
    border-radius: 20px;
    background-color: ${props => props.color};
    border: 20px solid ${props => props.color};
    box-shadow: 3px 4px 3px 3px ${props => props.frameOutline};
    width: 1286px;
    height: 726px;
`;

const Pillar = styled.div<{ color: string, frameOutline: string }>`
    height: 80px;
    width: 150px;
    background-color: ${props => props.color};
    box-shadow: 4px 5px 3px #000000;
`;

const Surface = styled.div<{ frameOutline: string }>`
    height: 35px;
    width: 800px;
    background-color: ${props => props.color};
    border-radius: 5px;
    box-shadow: 4px 5px 3px #000000;
`;

const Screen = styled.div<{ borderColor: string }>`
    overflow-x: hidden;
    overflow-y: hidden;
    border-radius: 5px;
    border: 3px solid ${props => props.borderColor};
`;

const MonitorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Stand: React.FC<{ frameColor: string, frameOutline: string }> = ({ frameColor, frameOutline }) => {
    return <>
        <Pillar color={frameColor} frameOutline={frameOutline} />
        <Surface color={frameColor} frameOutline={frameOutline} />
    </>
}

const Monitor: React.FC = ({ children }) => {

    const frameOutline = '#000000';
    const frameColor = '#545564';

    return <MonitorContainer>
        <Frame color={frameColor} frameOutline={frameOutline}>
            <Screen borderColor={frameOutline}>
                {children}
            </Screen>
        </Frame>
        <Stand frameColor={'#000000'} frameOutline={'#ffffff'} />
    </MonitorContainer>

}

export default Monitor;