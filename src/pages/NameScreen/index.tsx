import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ButtonScreen } from '../../components/ButtonScreen';
import { 
    Container, 
    Title,
    Emoji,
    Content,
    Input
} from './styles';

export function NameScreen() {
    const navigation = useNavigation();

    function handleNameScreen(){
        navigation.navigate('StartScreen')
    }
    return (
        <Container>
            <Content>

                <Emoji>
                😀
                </Emoji>
                <Title>
                    Como podemos {`\n`}
                    chamar você? {`\n`}
                </Title>
                <Input
                    placeholder="Digite um nome"
                >

                </Input>
                <ButtonScreen
                    title="Confirmar"
                    activeOpacity={0.7}
                    onPress={handleNameScreen}
                />
            </Content>    
        </Container>
    )
}
