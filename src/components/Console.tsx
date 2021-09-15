import React from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

const WindowContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 0.2rem solid #36ADAD;
    width: 100%;
    height: 100%;
    background-color: #292323;
`;

const WindowHeader = styled.div`
    display: flex;
    flex-direction: row-reverse;
    background-color: #36ADAD;
    height: 1.2rem;
    width: 100%;
    border-top: 0.2rem solid #36ADAD;
    border-left: 0.2rem solid #36ADAD;
    border-right: 0.2rem solid #36ADAD;
`;

const MainContainer = styled.div`
    width: 650px;
    height: 350px;
`;

const HeaderButton = styled.div`
    display: flex;
    height: 90%;
    width: 3%;
    background-color: #292323;
    border-radius: 20%;
    justify-content: center;
    align-items: center;
`;

const HeaderTitle = styled.div`
    width: 97%;
`;

const HeaderText = styled.p`
    color: #ffffff;
    font-weight: 400;
    margin: 0;
    margin-left: 0.2em;
`;

const Circle = styled.div`
  width: 50%;
  height: 50%;
  background-color: #FB9632;
  border-radius: 50%;
`;

const Console: React.FC<{ name: string }> = ({ name, children }) => {
    return <Draggable bounds='parent'>
        <MainContainer>
            <WindowHeader>
                <HeaderButton>
                    <Circle />
                </HeaderButton>
                <HeaderTitle>
                    <HeaderText>{name}</HeaderText>
                </HeaderTitle>
            </WindowHeader>
            <WindowContainer>
                {children}
            </WindowContainer>
        </MainContainer>
    </Draggable>
}

export default Console;