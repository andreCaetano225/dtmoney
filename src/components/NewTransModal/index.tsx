import Modal from 'react-modal';
import { Container, RadioBox, TransctionTypeContainer } from './styles';
import CloseImg from '../../assets/close.svg';
import EntradaImg from '../../assets/entradas.svg';
import SaidaImg from '../../assets/saida.svg';
import { FormEvent, useState, useContext } from 'react';
import { TransContext } from '../../TransContext';

interface ModalProps{
    isOpenModal: boolean;
    handleCloseModal: () => void;
}

export function NewTransModal({isOpenModal, handleCloseModal}: ModalProps){

    const [type,setType] = useState('deposit')
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [category,setCategory] = useState('')

    const {createTrans} = useContext(TransContext)

   async function handleCreateNewTranstion(event: FormEvent){
         event.preventDefault();
         handleCloseModal();

         setTitle('')
         setAmount(0)
         setCategory('')
         setType('deposit')

       await createTrans({
            title,
            amount,
            category,
            type,
        })
    }


    return(
        <Modal 
        isOpen={isOpenModal} 
        onRequestClose={handleCloseModal}
        
        overlayClassName="react-modal-overlay"
        className="react-modal-content">
            <Container onSubmit={handleCreateNewTranstion}>
            <button type="button" onClick={handleCloseModal} className="react-modal-close">
                <img src={CloseImg} alt="Fechar modal"  />
            </button>
            <h2>Cadastrar Transação</h2>

            <input 
            placeholder="Título" 
            value={title}
            onChange={event => setTitle(event.target.value)}

            /> 

           <input 
           placeholder="Valor" 
           type="number"
           value={amount}
           onChange={event => setAmount(Number(event.target.value))}
            />  

            <input 
            placeholder="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)} 
            />

            <TransctionTypeContainer>
                <RadioBox
                 type="button"
                 onClick={() => { setType('deposit'); }}
                 isActive={type === 'deposit'}
                 activeColor="green"
                >
               <img src={EntradaImg} alt="Entrada" />
               <span>Entrada</span>
                </RadioBox>

                <RadioBox
                 type="button"
                 onClick={() => { setType('withdraw'); }}
                 isActive={type === 'withdraw'}
                 activeColor="red"

                >
               <img src={SaidaImg} alt="Saida" />
               <span>Saída</span>
                </RadioBox>


            </TransctionTypeContainer>
            <button type="submit" >
                Cadastrar
            </button>

            </Container>

        </Modal>
    );
}