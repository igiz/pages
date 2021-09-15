import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Time = styled.div`
    display: flex;
    align-items: center;
    font-size: 19pt;
    padding: 0 1rem 0 1rem;
`;

const Clock: React.FC = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const watchTimer = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(watchTimer);
    }, [])

    return <Time>
        {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).toUpperCase()}
    </Time >
}

export default Clock;