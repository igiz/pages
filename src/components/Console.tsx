import React, { useContext } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import { AppContext } from "../contexts/AppContext";
import { Actions } from "../types/actions";
import { ProcessInfo } from "../types/types";

const WindowContainer = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 0.2rem solid #36ADAD;
    border-left: 0.2rem solid #36ADAD;
    border-right: 0.2rem solid #36ADAD;
    width: 100%;
    height: 100%;
    background-color: #292323;
`;

const WindowHeader = styled.div`
    display: flex;
    flex-direction: row-reverse;
    background-color: #36ADAD;
    min-height: 1.5rem;
    width: 100%;
    padding: 0.2rem;
`;

const MainContainer = styled.div<{ height: number | string, width: number | string }>`
    width: ${props => props.width};
    height: ${props => props.height};
    position: relative;
    left: 15%;
    top: 10%;
`;

const HeaderButton = styled.div`
    display: flex;
    height: 25px;
    width: 25px;
    background-color: #292323;
    border-radius: 20%;
    justify-content: center;
    align-items: center;
    transition: background-color 1s;
    :hover {
        background-color: #000000;
    }
`;

const HeaderTitle = styled.div`
    width: 97%;
    user-select: none;
`;

const HeaderText = styled.p`
    color: #ffffff;
    font-weight: 400;
    margin: 0;
    margin-left: 0.2em;
`;

const Circle = styled.div`
  width: 15px;
  height: 15px;
  background-color: #FB9632;
  border-radius: 50%;
  transition: background-color 1s , border-radius 1s, height 1s;
  :hover {
        background-color: #ff0000;
        border-radius: 0;
        height: 7px;
  }
`;

const ConsoleHeader: React.FC<{ appInfo: ProcessInfo }> = ({ appInfo }) => {
    var { dispatch } = useContext(AppContext);
    return <WindowHeader className={"handle"}>
        <HeaderButton>
            <Circle onMouseDown={() => dispatch(Actions.Close(appInfo))} />
        </HeaderButton>
        <HeaderTitle>
            <HeaderText>{appInfo.name}</HeaderText>
        </HeaderTitle>
    </WindowHeader>
}

const Console: React.FC<{ appInfo: ProcessInfo, dimensions: { height: number | string, width: number | string } }> = ({ appInfo, children, dimensions }) => {
    return <Draggable bounds='parent' handle={".handle"}>
        <MainContainer height={dimensions.height} width={dimensions.width}>
            <ConsoleHeader appInfo={appInfo} />
            <WindowContainer>
                {children}
            </WindowContainer>
        </MainContainer>
    </Draggable>
}

export default Console;