import React from 'react';
import styled from 'styled-components';

import { NavLink } from '../types/types';
import linkConfig from '../links.json';
import profile from '../assets/profile.jpg';

const ColoredSpan = styled.span<{ color: string }>`
    color: ${props => props.color};
`;

const ConsoleLine = styled.p`
    * {
        margin-left: 0.5em;
    }
`;

const ScrollSpan = styled.span<{ color: string, charCount: number }>`
    color: ${props => props.color};
    display: inline-flex;
    overflow: hidden;
    padding-right: 0.1rem;
    border-right: 0.2rem solid #959e97;
    white-space: nowrap;

    animation:
        typewriter 3s steps(${props => props.charCount}, end),
        blink-caret 1s step-end infinite;

    @keyframes typewriter {
        from { width: 0 }
        to { width: ${props => props.charCount / 2.5}em } // This calculation is such a hack for now , whoops
    }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: #959e97; }
    }
`;

const FlexContainer = styled.div<{ direction: "row" | "column" }>`
    display: flex;
    flex-direction: ${props => props.direction};
    flex-basis: 100%;
`;

const ContentsContainer = styled.div`
    flex: 3;
    padding: 0.5rem 0.5rem;
    border-left: 0.1rem dashed white;
    border-top: 0.1rem dashed white;

    p {
        color: #A83A33
    }
`;

const SmallImage = styled.img`
    width: 120px;
    height: 100px;
    border: 0.1rem solid white;
    border-radius: 5px;
    margin: 1rem;
`;

const NavigationContainer = styled.div`
    flex: 1;
    flex-direction: column;
    font-size: 12pt;

    * {
        margin-left: 0.5em;
    }

    a {
        text-decoration: none;
        color: #ffffff;

        :hover {
            color: #76C7F5;
            text-decoration: underline;
        }

        :hover:before {
            content: ">"
        }

        :hover:after{
            content: "<";
        }
    }
`;

const ConsoleText: React.FC<{ message: string }> = ({ message }) => {
    return <ConsoleLine>
        <ColoredSpan color={'#33A846'}>[user@home~]</ColoredSpan>
        <ScrollSpan charCount={message.length} color={'#A83A33'}>{message}</ScrollSpan>
    </ConsoleLine>
}

const CvApp: React.FC = () => {
    const navigationLinks: NavLink[] = linkConfig.links;
    return <FlexContainer direction={"column"}>
        <ConsoleText message={'Hello there stranger.......... My name is Ziggy'} />
        <FlexContainer direction={"row"}>
            <NavigationContainer>
                <ColoredSpan color="white">What would you like to know?</ColoredSpan>
                <table id="nav">
                    {navigationLinks.map(item => <tr>
                        <td>
                            <a href={item.link}>{item.text}</a>
                        </td>
                    </tr>)}
                </table>
            </NavigationContainer>
            <ContentsContainer>
                <FlexContainer direction={"row"}>
                    <SmallImage src={profile} />
                    <FlexContainer direction={"column"}>
                        <ColoredSpan color={"white"}>About Me</ColoredSpan>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Maecenas sit amet est vitae tortor faucibus vehicula suscipit at neque.
                            Nulla eget efficitur leo. Pellentesque ut neque in tortor tincidunt hendrerit ut ut ante.
                            Suspendisse sodales lectus in sodales semper. Maecenas elit orci, condimentum vitae tellus ut, malesuada feugiat arcu. Nunc euismod tempor vehicula. Duis sem felis,
                            accumsan non elementum vitae, ornare non dolor. Proin sit amet mauris metus. Quisque sit amet accumsan diam. Aliquam rutrum justo vel risus ultrices, v
                            el malesuada magna pretium. Etiam eget dictum ante. Aliquam lacinia, enim in luctus congue, tellus leo laoreet lacus, in volutpat justo orci ut lorem.
                            Proin pellentesque dignissim diam, a accumsan sem suscipit volutpat.
                        </p>
                        <p>(This section will be filled soon , I promise)</p>
                        <p>♪┏(・o･)┛♪┗ ( ･o･) ┓♪</p>
                    </FlexContainer>
                </FlexContainer>
            </ContentsContainer>
        </FlexContainer>
    </FlexContainer>
}

export default CvApp;