import React from 'react';
import styled from 'styled-components';

import { ColoredSpan, FlexContainer, SmallImage } from '../Common';
import profile from '../../assets/profile.jpg';

const Container = styled(FlexContainer)`
    img {
        margin-top: 40px;
    }
`

const About: React.FC = () => {
    return <Container direction={"row"}>
        <SmallImage src={profile} />
        <FlexContainer direction={"column"}>
            <ColoredSpan color={"white"}>About Me</ColoredSpan>
            <p>Software Engineer based in London with over 8 years’ experience in the software development industry.
                Over this period, I have worked in various teams and gathered knowledge in various technologies to implement and maintain applications for financial reporting, budgeting, analytics and BIM data on both web and desktop applications.
                I enjoy taking on technical tasks of any complexity. I am passionate and always seek to learn new technologies and tools to widen my skill set.
                I also have extensive experience working with customers and troubleshooting technical issues live on calls.
            </p>
            <p>♪┏(・o･)┛♪┗ ( ･o･) ┓♪</p>
        </FlexContainer>
    </Container>
}

export default About;