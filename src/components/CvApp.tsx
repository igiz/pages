import React from 'react';
import styled from 'styled-components';


const ColoredSpan = styled.span<{ color: string }>`
    color: ${props => props.color};
`;

const ConsoleLine = styled.p`
    * {
        margin-left: 0.5em;
    }
`;

const ScrollSpan = styled.span<{ color: string }> `
    color: ${props => props.color};
    display: inline-flex;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    padding-right: 0.5rem;
    border-right: 0.2rem solid #959e97; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */

    animation:
        typing 3.5s steps(40, end),
        blink-caret .75s step-end infinite;

    /* The typing effect */
    @keyframes typing {
        from { width: 0% }
        to { width: 65% }
    }
`;


const ConsoleText: React.FC<{ message: string }> = ({ message }) => {
    return <ConsoleLine>
        <ColoredSpan color={'#33A846'}>[user@home~]</ColoredSpan>
        <ScrollSpan color={'#A83A33'}>{message}</ScrollSpan>
    </ConsoleLine>
}

const CvApp: React.FC = () => {
    return <div>
        <ConsoleText message={'Hello there stranger.... My name is Ziggy'} />
    </div>
}

export default CvApp;