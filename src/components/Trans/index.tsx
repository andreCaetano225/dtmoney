import { useContext, } from "react";
import { TransContext } from "../../TransContext";
import { Container } from "./styles";



export function Trans(){
    const { trans} = useContext(TransContext);



    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                   {trans.map(t => {
                       return(
                        <tr key={t.id}>
                        <td >{t.title}</td>
                        <td className={t.type}>
                            {new Intl.NumberFormat('pt-BR', {
                                style:'currency',
                                currency: 'BRL'
                            }).format(t.amount)}
                            </td>
                        <td>{t.category}</td>
                        <td> 
                            {new Intl.DateTimeFormat('pt-BR').format(
                               new Date(t.amount))}</td>
                      </tr>
                       )
                   })}
                </tbody>
            </table>
        </Container>
    )
}