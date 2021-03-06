import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const Content = styled.View`
    padding: 50px;
    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.heading};
    text-align: center;
    font-size: 40px;
    margin-bottom: 16px;
`

export const SubTitle = styled.Text`
    color: ${({ theme }) => theme.colors.heading};
    font-size: 15px;
    text-align: center;
    margin-bottom: 64px;
`