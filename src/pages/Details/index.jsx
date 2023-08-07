import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Tags } from "../../components/Tags";
import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir a nota" />

          <h1>Introdução a React</h1>
          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://google.com</a>
              </li>
              <li>
                <a href="#">https://facebook.com</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tags title="Node.js" />
            <Tags title="React-native" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
