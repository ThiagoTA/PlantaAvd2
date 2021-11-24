import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
    height: 56px;
    width: 56px;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 10px;
`

export const Icon = styled(AntDesign)`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.background}
`