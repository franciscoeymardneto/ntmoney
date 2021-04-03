import Modal from 'react-modal';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Form, TransactionTypeContainer} from './styles';

import closeImage from '../../assets/close.svg'
interface NewTransactionsModal {
  isOpen: boolean
  onRequestClose: () => void
} 

export function NewTransactionsModal(props: NewTransactionsModal) {
  const { isOpen, onRequestClose } = props
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button 
        type='button' 
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeImage} alt='close modal'/>
      </button>
      <Form >
        <h2>Add Transaction</h2>

        <input 
          placeholder='Title'
        />

        <input 
          type='number'
          placeholder='Amount'
        />

        <input 
          placeholder='Category'
        />

        <TransactionTypeContainer>
          <button
            type='button'
          >
            <img src={incomeImg} alt="income"/>
            <span>
            Income
            </span>
            
          </button>
          <button
            type='button'
          >
            <img src={outcomeImg} alt="outcome"/>
            <span>
              Outcome
            </span>
          </button>
        </TransactionTypeContainer>

        <button 
          type='submit'
        >
          Add
        </button>
      </Form>
      
    </Modal>
  );
}
