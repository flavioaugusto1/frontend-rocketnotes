import { Container, Form } from "./styles";

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/TextArea";

export function New(){
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">Voltar</a>
          </header>

          <Input placeholder="título"/>
          <Textarea placeholder="Observações"/>
        </Form>
      </main>

    </Container>
  )
}