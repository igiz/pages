import React, { useContext, useEffect, useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import { AppContext } from "../contexts/AppContext";
import { Actions } from "../types/actions";
import { ProcessInfo } from "../types/types";

const WindowContainer = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 5px solid #36ADAD;
    border-left: 5px solid #36ADAD;
    border-right: 5px solid #36ADAD;
    min-height: 100px;
    overflow-y: scroll;

    background-color: #292323;

    ::-webkit-scrollbar {
        width: 0.4rem;
    }

    ::-webkit-scrollbar-track {
        background: #363232;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #575353;
    }
`;

const WindowHeader = styled.div`
    display: flex;
    flex-direction: row-reverse;
    background-color: #36ADAD;
    min-height: 20px;
    padding-right: 5px;
    padding-top: 3px;
    padding-bottom: 3px;
`;

const MainContainer = styled.div<{ height: number | string, width: number | string, opacity: number, left: string }>`
    width: ${props => props.width};
    height: ${props => props.height};
    position: relative;
    left: ${props => props.left};
    top: 10%;
    transition: opacity 0.5s, left 1s;
    opacity: ${props => props.opacity};
`;

const HeaderButton = styled.div`
    display: flex;
    height: 1.5rem;
    width: 1.5rem;
    background-color: #292323;
    border-radius: 0.3rem;
    justify-content: center;
    align-items: center;
    transition: background-color 1s;
    :hover {
        background-color: #000000;
        cursor: pointer;
    }
`;

const HeaderTitle = styled.div`
    width: 100%;
    user-select: none;
`;

const HeaderText = styled.p`
    color: #ffffff;
    font-weight: 400;
    margin: 0;
    margin-left: 0.2em;
`;

const Circle = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  background-color: #FB9632;
  border-radius: 50%;
  transition: background-color 0.2s , border-radius 0.2s, height 0.2s;
  :hover {
        background-color: #ff0000;
        border-radius: 0;
        height: 7px;
        cursor: pointer;
  }
`;

const ConsoleHeader: React.FC<{ appInfo: ProcessInfo }> = ({ appInfo }) => {
    var { dispatch } = useContext(AppContext);
    return <WindowHeader className={"handle"}>
        <HeaderButton onMouseDown={() => dispatch(Actions.Close(appInfo))}>
            <Circle />
        </HeaderButton>
        <HeaderTitle>
            <HeaderText>{appInfo.name}</HeaderText>
        </HeaderTitle>
    </WindowHeader>
}

const Console: React.FC<{ appInfo: ProcessInfo, dimensions: { height: number | string, width: number | string } }> = ({ appInfo, children, dimensions }) => {

    const [opacity, setOpacity] = useState<number>(0);
    const [left, setLeft] = useState<string>("0%");
    useEffect(() => {
        setTimeout(() => {
            setOpacity(1);
            setLeft("15%");
        }, 50)
    }, [])

    return <Draggable bounds='parent' handle={".handle"}>
        <MainContainer height={dimensions.height} width={dimensions.width} opacity={opacity} left={left}>
            <ConsoleHeader appInfo={appInfo} />
            <WindowContainer>
                {children}
            </WindowContainer>
        </MainContainer>
    </Draggable>
}

export default Console;