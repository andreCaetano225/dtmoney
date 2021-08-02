import LogoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps{
    onOpenNewTrans: () => void;
}

export function Header({onOpenNewTrans}: HeaderProps){
   

    return(
        <Container>
            <Content>
           <img src={LogoImg} alt="dtmoney" />
           <button type="button" onClick={onOpenNewTrans}>
               Nova transação
           </button>
           </Content>
        </Container>
    )
}