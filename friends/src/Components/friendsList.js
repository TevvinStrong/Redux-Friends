import React from 'react';
import styled from 'styled-components';
import Friend from './Friend';

const list = styled.div`
    margin: 0 auto;
    margin-top: 50px;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export default props => (
    <list>
        {props.friends.map(x => <Friend key={x.id} data={x} deleteFriends={props.deleteFriends} />)}
    </list>
);