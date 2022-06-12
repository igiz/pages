import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    height: 100%;
    width: 100%;
    text-align: center;
`;

const ErrorHeader = styled.h1`
    color: red;
`;

export const Folder: React.FC = () => {
    return <Container>
        <ErrorHeader>ACCESS DENIED: CHEEKY YOU!</ErrorHeader>
    </Container>;
};

export default Folder;
