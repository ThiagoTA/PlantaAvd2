import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";

export function ButtonWelcome({ ...rest }: TouchableOpacityProps) {
    return (
        <Container
            {...rest}
            accessibilityLabel='confirmar'
        >
            <Icon name='right' accessibility="próximo" />
        </Container>
    )
}