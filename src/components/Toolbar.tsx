import styled from 'styled-components';
import React, { useContext } from 'react';
import Clock from './Clock';
import plug from '../assets/plug.svg'
import computer from '../assets/computer.svg';
import { AppContext } from '../contexts/AppContext';

const Toolbar = styled.div<{ height: string }>`
    display: flex;
    flex-direction: row;
    height: ${props => props.height};
    width: 100%;
    background-color: #F5F0F0;
    box-shadow: inset 0 0 3px #111010b0;
`;

const Left = styled.div`
    display: flex;
    width: 50%;
    div {
        border-left: 1px solid black;
    }
`;

const Right = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 50%;
`;

const AppBar = styled.div`
    width: 14em;
    box-shadow: 0px 2px 5px 0px #aaa8a8 inset;
    display: flex;
    align-items: center;
    padding: 0 0.5em 0 0.5em;
    p {
        width: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

const SmallImage = styled.img`
    width: 34px;
    height: 100%;
    padding: 0 0.5rem 0 0.5rem;
`;

const DesktopToolbar: React.FC<{ height: string }> = ({ height }) => {
    const { state } = useContext(AppContext);

    return <Toolbar height={height}>
        <Left>
            <SmallImage src={computer} />
            {
                Object.values(state.running).map(item =>
                    <AppBar>
                        <SmallImage src={item.appLogo} />
                        <p>{item.name}</p>
                    </AppBar>
                )
            }
        </Left>
        <Right>
            <SmallImage src={plug} />
            <Clock />
        </Right>
    </Toolbar>
}

export default DesktopToolbar;