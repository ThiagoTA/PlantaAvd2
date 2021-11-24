import React from 'react';
import { 

    AvatarImage
} from './styles';

interface AvatarProps {
    urlImage: string;
}

export function Avatar({ urlImage }: AvatarProps) {
    return (
        <AvatarImage 
            source={ { uri: urlImage } }
        />
    )
}