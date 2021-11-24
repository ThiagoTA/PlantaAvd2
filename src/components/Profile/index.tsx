import React from 'react';
import { Avatar } from '../Avatar';
import { 
    Container
} from './styles';

export function Profile() {
    return (
        <Container>
            <Avatar urlImage="https://avatars.githubusercontent.com/u/60077182?v=4" />
        </Container>
    )
}