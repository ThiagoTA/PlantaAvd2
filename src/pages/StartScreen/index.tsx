import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ButtonScreen } from '../../components/ButtonScreen';
import { 
    Container, 
    Title,
    SubTitle,
    Emoji,
    Content
} from './styles';

export function StartScreen() {
    const navigation = useNavigation();

    function handleStartScreen(){
        navigation.navigate('Home')
    }
    return (
        <Container>
            <Content>

                <Emoji>
                😄
                </Emoji>
                <Title>
                    Prontinho
                </Title>
                <SubTitle>
                    Agora vamos começar a cuidar das suas {`\n`}
                    plantinhas com muito cuidado
                </SubTitle>
                <ButtonScreen
                    title="Começar"
                    activeOpacity={0.7}
                    onPress={handleStartScreen}
                />
            </Content>    
        </Container>
    )
}
