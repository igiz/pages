import React, { useContext } from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

import { NavLink } from '../types/types';
import linkConfig from '../links.json';
import { ColoredSpan, FlexContainer } from './Common';
import About from './views/About';
import Education from './views/Education';
import ComingSoon from './views/ComingSoon';
import { AppContext } from '../contexts/AppContext';

const ConsoleLine = styled.p`
    * {
        margin-left: 0.5em;
    }
`;

const ScrollSpan = styled.span<{ color: string, charCount: number }>`
    color: ${(props) => props.color};
    display: inline-flex;
    overflow: hidden;
    padding-right: 0.1rem;
    border-right: 0.2rem solid #959e97;
    white-space: nowrap;

    animation:
        typewriter 3s steps(${(props) => props.charCount}, end),
        blink-caret 1s step-end infinite;

    @keyframes typewriter {
        from { width: 0 }
        to { width: ${(props) => props.charCount / 2.5}em } // This calculation is such a hack for now , whoops
    }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: #959e97; }
    }
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

const NavigationContainer = styled.div`
    position: sticky;
    top: 0;
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
    </ConsoleLine>;
};

const CvApp: React.FC = () => {
    const { baseUrl } = useContext(AppContext);
    const navigationLinks: NavLink[] = linkConfig.links;
    return <Router basename={baseUrl}>
        <FlexContainer direction={'column'}>
            <ConsoleText message={'Hello there stranger.......... My name is Ziggy'} />
            <FlexContainer direction={'row'}>
                <NavigationContainer>
                    <ColoredSpan color="white">What would you like to know?</ColoredSpan>
                    <table id="nav">
                        {navigationLinks.map((item) => <tr key={item.text}>
                            <td><Link to={item.link}>{item.text}</Link></td>
                        </tr>)}
                    </table>
                </NavigationContainer>
                <ContentsContainer>
                    <FlexContainer direction={'row'}>

                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/education">
                                <Education />
                            </Route>
                            <Route path={['/experience', '/tech', '/links', '/contact']}>
                                <ComingSoon />
                            </Route>
                            <Route path="/">
                                <About />
                            </Route>
                        </Switch>

                    </FlexContainer>
                </ContentsContainer>
            </FlexContainer>
        </FlexContainer>
    </Router >;
};

export default CvApp;
