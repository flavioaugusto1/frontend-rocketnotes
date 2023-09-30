import { useEffect, useState } from "react";
import { Container, Links, Content } from "./styles";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Tags } from "../../components/Tags";
import { Button } from "../../components/Button";

export function Details() {
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1)
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota?")
    if(confirm){
      await api.delete(`notes/delete/${params.id}`);
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/show/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText
              title="Excluir a nota"
              onClick={handleRemove}
            />

            <h1>{data.title}</h1>
            <p>{data.description}</p>

            {data.links && (
              <Section title="Links úteis">
                <Links>
                  {data.links.map(link => (
                    <li key={String(link.id)}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.url}
                        {console.log(link.url)}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tags 
                      key={String(tag.id)}  
                      title={tag.name}
                    />
                  ))
                }
              </Section>
            }
              <Button
                title="Voltar"
                onClick={handleBack}
              />
          </Content>
        </main>
      )}
    </Container>
  );
}
