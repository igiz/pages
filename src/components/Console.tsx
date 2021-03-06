import React, { forwardRef, useContext, useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import { AppContext } from '../contexts/AppContext';
import { Actions } from '../types/actions';
import { ProcessInfo } from '../types/types';

export interface IAppContainerProps {
    appInfo: ProcessInfo,
    dimensions: { height: number | string, width: number | string },
    onFocus: () => void;
}

const WindowContainer = styled.div<{ borderColor: string }>`
    display: flex;
    max-height: 95%;
    min-height: 95%;
    flex-direction: row;
    border-bottom: 5px solid ${(props) => props.borderColor};
    border-left: 5px solid ${(props) => props.borderColor};
    border-right: 5px solid ${(props) => props.borderColor};
    overflow-wrap: break-word;
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

const WindowHeader = styled.div<{ borderColor: string }>`
    display: flex;
    height: auto;
    flex-direction: row-reverse;
    background-color: ${(props) => props.borderColor};
    padding-right: 5px;
    padding-top: 3px;
    padding-bottom: 3px;
`;

const MainContainer = styled.div<{ height: number | string, width: number | string, opacity: number, left: string }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    position: absolute;
    left: ${(props) => props.left};
    transition: opacity 0.5s, left 1s;
    opacity: ${(props) => props.opacity};
    top: 10%;
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

const ConsoleHeader: React.FC<{ appInfo: ProcessInfo, borderColor: string, onFocus: () => void }> = ({ appInfo, borderColor, onFocus }) => {
    const { dispatch } = useContext(AppContext);

    return <WindowHeader className={'handle'} borderColor={borderColor}>
        <HeaderButton onMouseDown={(event) => {
            dispatch(Actions.close(appInfo));
            event.preventDefault();
        }}>
            <Circle />
        </HeaderButton>
        <HeaderTitle>
            <HeaderText onMouseDown={onFocus}>{appInfo.name}</HeaderText>
        </HeaderTitle>
    </WindowHeader>;
};


const Console = forwardRef<HTMLDivElement, React.PropsWithChildren<IAppContainerProps>>(({ appInfo, dimensions, onFocus, children }, ref) => {
    const { state } = useContext(AppContext);
    const [opacity, setOpacity] = useState<number>(0);
    const [left, setLeft] = useState<string>('0%');
    const borderColor = state.focused === appInfo.appId ? '#36ADAD' : '#235f5f';

    useEffect(() => {
        setTimeout(() => {
            setOpacity(1);
            setLeft('15%');
        }, 50);
    }, []);

    return <Draggable bounds='parent' handle={'.handle'}>
        <MainContainer height={dimensions.height} width={dimensions.width} opacity={opacity} left={left} ref={ref}>
            <ConsoleHeader appInfo={appInfo} onFocus={onFocus} borderColor={borderColor} />
            <WindowContainer onMouseDown={onFocus} borderColor={borderColor}>
                {children}
            </WindowContainer>
        </MainContainer>
    </Draggable >;
});

export default Console;
