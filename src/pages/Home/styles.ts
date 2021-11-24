import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.heading};
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    font-size: 36px;
`

export const Name = styled.Text`
    color: ${({ theme }) => theme.colors.name};
    align-items: center;
    justify-content: center;
    font-size: 36px;
    margin-top: 20px;
    margin-left: -156px;
`

export const SubTitle = styled.Text`
    color: ${({ theme }) => theme.colors.heading};
    font-size: 15px;
    align-items: center;
    justify-content: center;
    margin-top: 170px;
    margin-left: -185px;
`

export const Header = styled.View`
    width: 100%;
    padding-left: 24px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
    margin-top: 40px;
    margin-bottom: 42px;
`