import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionwModal: () => void; 
}
export function Header(props: HeaderProps) {
  const { onOpenNewTransactionwModal } = props;
  return (
    <Container>
      <Content>
        <img src={logoImg} alt='nt money'/>
        <button 
          type='button'
          onClick={onOpenNewTransactionwModal}
        >
          New Transaction
        </button>
      </Content>
    </Container>
  )
}