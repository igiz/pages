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

const Stand = styled.div<{ color: string, frameOutline: string }>`
    height: 90px;
    width: 170px;
    background-color: ${props => props.color};
    box-shadow: 3px 4px 0px 0px ${props => props.frameOutline};
`;

const StandBar = styled.div<{ frameOutline: string }>`
    height: 25px;
    width: 700px;
    background-color: ${props => props.color};
    border-radius: 15px;
    box-shadow: 3px 4px 0px 0px  ${props => props.frameOutline};
`;

const Screen = styled.div<{ borderColor: string }>`
    overflow-x: hidden;
    overflow-y: hidden;
    border-radius: 5px;
    border: 3px solid ${props => props.borderColor};
`;

const Monitor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SleekMonitor: React.FC = ({ children }) => {

    const frameOutline = '#b4afaf';
    const frameColor = '#000000';

    return <Monitor>
        <Frame color={frameColor} frameOutline={frameOutline}>
            <Screen borderColor={frameOutline}>
                {children}
            </Screen>
        </Frame>
        <Stand color={frameColor} frameOutline={frameOutline} />
        <StandBar color={frameColor} frameOutline={frameOutline} />
    </Monitor>

}

export default SleekMonitor;