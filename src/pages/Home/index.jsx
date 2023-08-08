import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { FiPlus, FiSearch } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" $isactive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Node" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Marcadores">
          <Note
            data={{
              title: "React",
              tags: [
                { id: 1, name: "React" },
                {id: 2, name: "React-Native"}
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
