import React from 'react';
import styled from 'styled-components';

const Frame = styled.div<{ color: string, frameOutline: string }>`
    align-content: center;
    background-color: ${(props) => props.color};
    border: 1vw solid ${(props) => props.color};
    box-shadow: 3px 4px 3px 3px ${(props) => props.frameOutline};
`;

const Pillar = styled.div<{ color: string, frameOutline: string }>`
    height: 10vh;
    width: 10vw;
    background-color: ${(props) => props.color};
    box-shadow: 4px 5px 3px #000000;
`;

const Surface = styled.div<{ frameOutline: string }>`
    height: 5vh;
    width: 50vw;
    background-color: ${(props) => props.color};
    box-shadow: 1vw 1vw 3vh #000000;
`;

const Screen = styled.div<{ borderColor: string }>`
    overflow-x: hidden;
    overflow-y: hidden;
    width: 80vw;
    height: 75vh;
    border: 3px solid ${(props) => props.borderColor};
`;

const MonitorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
`;

const Stand: React.FC<{ frameColor: string, frameOutline: string }> = ({ frameColor, frameOutline }) => {
    return <>
        <Pillar color={frameColor} frameOutline={frameOutline} />
        <Surface color={frameColor} frameOutline={frameOutline} />
    </>;
};

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
    </MonitorContainer>;
};

export default Monitor;
