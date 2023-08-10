import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/flavioaugusto1.png"
          alt="Imagem do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Flávio Augusto</strong>
        </div>
      </Profile>

      <Logout type="button">
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}