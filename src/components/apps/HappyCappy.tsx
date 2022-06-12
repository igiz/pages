import { animated, useSpring } from '@react-spring/web';
import React from 'react';
import styled from 'styled-components';
import corn from '../../assets/corn.svg';
import capybara from '../../assets/capybara.svg';

const Container = styled.div`
    background-color: green;
    width: 100%;
    height: 100%;
    display: flex;
`;

const HappyCappy: React.FC = () => {
    const cornStyle = useSpring({});

    const onDrag = (event: React.DragEvent<HTMLDivElement>) => {
        const currentRect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.pageX - currentRect.left;
        const mouseY = event.pageY - currentRect.top;
        cornStyle.x.set(mouseX);
        cornStyle.y.set(mouseY);
        console.log(`Drag position X:${mouseX} Y:${mouseY}`);
    };

    return <Container>
        <animated.div style={{
            width: '50%',
            height: '50%',
        }}>
            <img src={capybara} alt="capybara" />
        </animated.div>
        <animated.div onDrag={onDrag} style={{
            width: '20%',
            height: '20%',
        }}>
            <img src={corn} alt="corn" />
        </animated.div>
    </Container >;
};

export default HappyCappy;
