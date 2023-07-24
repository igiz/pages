import React, { useState } from 'react';
import styled from 'styled-components';
import { useDrag } from '@use-gesture/react';
import { ReactComponent as Corn } from '../../assets/corn.svg';
import { ReactComponent as Capybara } from '../../assets/capybara.svg';
import { ReactComponent as CapybaraChew } from '../../assets/capyabara-chew.svg';

const Container = styled.div`
    display: block;
`;

const Counter = styled.p`
    user-select: none;
`;

const CappyGame = () => {
    const [, setPosition] = useState({ x: 0, y: 0 });
    const [chew, setChew] = useState(false);
    const [chewCounter, setChewCounter] = useState(0);

    const bind = useDrag(({ down, movement: [mx, my] }) => {
        if (!down) return;
        setPosition({ x: mx, y: my });
    });

    const handleClick = () => {
        setChew(chew == true? false : true);
        setChewCounter(chewCounter+1);
    };

    return (
        <Container>
            <Corn {...bind()} width="50" height="50" onClick={handleClick} />
            <Counter> Chew Counter: {chewCounter}</Counter>
            {chew == true ? <CapybaraChew width={200} height={200} /> : <Capybara width={200} height={200} /> }
        </Container>
    );
};

export default CappyGame;
