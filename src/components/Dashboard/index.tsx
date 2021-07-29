import { Summary } from "../Summary";
import { Trans } from "../Trans";
import { Container } from "./styles";

export function Dashboard(){
    return(
        <Container>
            <Summary/>
            <Trans/>
        </Container>

    )
}