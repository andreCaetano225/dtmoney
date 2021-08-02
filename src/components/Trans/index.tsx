import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface TransProps{
    id:number;
    title: string;
    amount: number
    type:string;
    category: string;
    createdAt: string;
}

export function Trans(){
    const [trans,setTrans] = useState<TransProps[]>([])
    useEffect( () =>{
        api.get('trans')
        .then(response => setTrans(response.data.trans));
        
    }, []);

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