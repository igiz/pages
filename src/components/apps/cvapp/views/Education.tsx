import React from 'react';
import styled
    from 'styled-components';
import { FlexContainer } from '../../../Common';

const Table = styled.table`
    width: 100%;
    text-align: left;
    border: solid black 2px;
    border-radius:6px;


    th {
        background-color: white;
        text-align: center;
    }
    tr {
        p {
            padding-left: 10px;
        }
        text-align: left;
        td {
            padding-left: 10px;
            color: white;
            :nth-child(1) {
                width: 70%;
            }
            :nth-child(2) {
                text-align: center;
                vertical-align: top;
                width: 30%;
            }

            span {
                color: #ffffff5e;
                * {
                    padding-left: 10px;
                }
            }
        }
        background-color: #000000;
    }
`;


const Education: React.FC = () => {
    return <FlexContainer direction={'column'}>
        <Table>
            <tr>
                <th>What</th>
                <th>When</th>
            </tr>
            <tr>
                <td>
                    Bachelor in Business Computing, 1st
                    Westfield Trust Prize
                    <p>Queen Mary University of London</p>
                    <p>
                        <span>
                            Extracurricular Activities:
                            <li>PASS Mentor</li>
                            <li>Teaching Assistant</li>
                        </span>
                    </p>
                </td>
                <td>
                    2011 – 2013
                </td>
            </tr>
            <tr>
                <td>
                    A Levels in Geography, ICT &amp; Business
                    <p>Bishop Douglass RC School</p>
                </td>
                <td>2009 – 2011</td>
            </tr>
        </Table>
    </FlexContainer>;
};

export default Education;
