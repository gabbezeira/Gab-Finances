import logoImg from "../../assets/logo.png";
import { useAuth } from "../../hooks";

import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  const { Logout } = useAuth();

  function handleLogout() {
    Logout();
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo Gab Finances" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
        <button type="button" onClick={handleLogout} className="logout">
          Sair
        </button>
      </Content>
    </Container>
  );
}
