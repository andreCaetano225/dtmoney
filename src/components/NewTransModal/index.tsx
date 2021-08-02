import Modal from 'react-modal';
import { Container } from './styles';
import CloseImg from '../../assets/close.svg';

interface ModalProps{
    isOpenModal: boolean;
    handleCloseModal: () => void;
}

export function NewTransModal({isOpenModal, handleCloseModal}: ModalProps){
    return(
        <Modal 
        isOpen={isOpenModal} 
        onRequestClose={handleCloseModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">
            <button type="button" onClick={handleCloseModal} className="react-modal-close">
                <img src={CloseImg} alt="Fechar modal"  />
            </button>
            <Container>
            <h2>Cadastrar Transação</h2>

            <input placeholder="Título" 
            /> 

           <input placeholder="Valor" 
           type="number"
            />  

            <input placeholder="Categoria" 
            />

            <button type="submit">
                Cadastrar
            </button>
            </Container>

        </Modal>
    );
}