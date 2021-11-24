import React from "react";
import { Profile } from "../../components/Profile";
import { 
    Container,
    Title,
    Name,
    SubTitle,
    Header, 
} from "./styles";

export function Home() {
    return (
        <Container>
            <Header>
                <Title>
                    Olá, {`\n`}
                </Title>
                <Name>
                    {`\n`} Thiago
                </Name>
                <SubTitle>
                    Em que ambiente {`\n`}
                    você quer colocar sua planta?
                </SubTitle>
                <Profile />            
            </Header>
        </Container>
    )
}