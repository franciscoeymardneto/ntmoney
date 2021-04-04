import Modal from 'react-modal';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Form, RadioBox, TransactionTypeContainer} from './styles';

import closeImage from '../../assets/close.svg'
import { useState } from 'react';
interface NewTransactionsModal {
  isOpen: boolean
  onRequestClose: () => void
} 

export function NewTransactionsModal(props: NewTransactionsModal) {
  const { isOpen, onRequestClose } = props
  const [type, setType] = useState('deposit')
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
          <RadioBox
            type='button'
            isActive={type === 'deposit'}
            onClick={() => setType('deposit')}
            activeColor='green'
          >
            <img src={incomeImg} alt="income"/>
            <span>
            Income
            </span>
            
          </RadioBox>
          <RadioBox
            type='button'
            isActive={type === 'withdraw'}
            onClick={() => setType('withdraw')}
            activeColor='red'
          >
            <img src={outcomeImg} alt="outcome"/>
            <span>
              Outcome
            </span>
          </RadioBox>
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
