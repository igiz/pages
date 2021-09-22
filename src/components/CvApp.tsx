import React from 'react';
import styled from 'styled-components';

import { NavLink } from '../types/interfaces';
import linkConfig from '../links.json'

const ColoredSpan = styled.span<{ color: string }>`
    color: ${props => props.color};
`;

const ConsoleLine = styled.p`
    * {
        margin-left: 0.5em;
    }
`;

const ScrollSpan = styled.span<{ color: string, steps: number }>`
    color: ${props => props.color};
    display: inline-flex;
    overflow: hidden;
    padding-right: 0.1rem;
    border-right: 0.2rem solid #959e97;
    white-space: nowrap;

    animation:
        typewriter 3s steps(${props => props.steps}, end),
        blink-caret 1s step-end infinite;

    @keyframes typewriter {
        from { width: 0% }
        to { width: 65% }
    }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: #959e97; }
    }
`;

const ConsoleContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ConsoleText: React.FC<{ message: string }> = ({ message }) => {
    return <ConsoleLine>
        <ColoredSpan color={'#33A846'}>[user@home~]</ColoredSpan>
        <ScrollSpan steps={message.length} color={'#A83A33'}>{message}</ScrollSpan>
    </ConsoleLine>
}

const CvApp: React.FC = () => {
    const navigationLinks: NavLink[] = linkConfig.links;
    return <ConsoleContainer>
        <ConsoleText message={'Hello there stranger.......... My name is Ziggy'} />
        <div>
            <ColoredSpan color="white">What would you like to know?</ColoredSpan>
            <table id="nav">
                {navigationLinks.map(item => <tr>
                    <td>
                        <a href={item.link}>{item.text}</a>
                    </td>
                </tr>)}
            </table>
        </div>
    </ConsoleContainer>
}

export default CvApp;