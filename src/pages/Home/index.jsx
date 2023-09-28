import { useState, useEffect } from "react";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { FiPlus, FiSearch } from "react-icons/fi";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags/index");
      setTags(response.data);
    }

    fetchTags();
  }, []);

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText 
            title="Todos" 
            isActive
          />
        </li>

        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
              />
            </li>
          ))
        }
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Marcadores">
          <Link to="/details/1">
            <Note
              data={{
                title: "React",
                tags: [
                  { id: 1, name: "React" },
                  { id: 2, name: "React-Native" },
                ],
              }}
            />
          </Link>
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
