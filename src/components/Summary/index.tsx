import { Container } from "./styles";
import EntradasImg from '../../assets/entradas.svg'
import SaidaImg from '../../assets/saida.svg'
import TotalImg from '../../assets/total.svg'
export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={EntradasImg} alt="entradas" />
                </header>
                <strong>R$1000</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={SaidaImg} alt="Saida" />
                </header>
                <strong>-R$500</strong>
            </div>
            <div className="fundo">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total" />
                </header>
                <strong>R$500</strong>
            </div>
        </Container>
    )
}