import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 16px;
    flex-direction: row;
    align-items: center;
`

export const Title = styled.Text`
    flex: 1px;
    font-size: 15px;
    text-align: center;
    color: ${({ theme }) => theme.colors.background};
`