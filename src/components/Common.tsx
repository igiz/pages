import styled from "styled-components";

export const SmallImage = styled.img`
    width: 120px;
    height: 100px;
    border: 0.1rem solid white;
    border-radius: 5px;
    margin: 1rem;
`;

export const FlexContainer = styled.div<{ direction: "row" | "column" }>`
    display: flex;
    flex-direction: ${props => props.direction};
    flex-basis: 100%;
`;

export const ColoredSpan = styled.span<{ color: string }>`
    color: ${props => props.color};
`;