import { useNavigation, useNavigationState } from '@react-navigation/core';
import React from 'react';
import { 
    Image
} from 'react-native';

import Watering from '../../assets/watering.png';
import { ButtonWelcome } from '../../components/ButtonWelcome';
import { 
    Container, 
    Title,
    SubTitle,
    Content 
} from './styles';

export function Welcome() {
    const navigation = useNavigation();

    function handleWelcome(){
        navigation.navigate('NameScreen')
    }
    return (
        <Container>
            <Content>
                <Title>
                    Gerencie {`\n`}
                    suas plantas de {`\n`}
                    forma fácil
                </Title>
                <Image source={Watering} />
                <SubTitle>
                    Não esqueça mais de regar suas {`\n`}
                    plantas. Nós cuidamos de lembrar você {`\n`}
                    sempre que precisas
                </SubTitle>
                <ButtonWelcome
                    activeOpacity={0.7}
                    onPress={handleWelcome}
                />
            </Content>    
        </Container>
    )
}
