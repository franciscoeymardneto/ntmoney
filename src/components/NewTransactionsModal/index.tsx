import Modal from 'react-modal';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Form, RadioBox, TransactionTypeContainer} from './styles';

import closeImage from '../../assets/close.svg'
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';
interface NewTransactionsModal {
  isOpen: boolean
  onRequestClose: () => void
} 

export function NewTransactionsModal(props: NewTransactionsModal) {
  const { isOpen, onRequestClose } = props
  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState(0)


  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      title,
      amount,
      category,
      type,
      createdAt: new Date()
    }

    api.post('/transactions',data)
  }
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
      <Form onSubmit={handleCreateNewTransaction}>
        <h2>Add Transaction</h2>

        <input 
          placeholder='Title'
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />

        <input 
          type='number'
          placeholder='Amount'
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <input 
          placeholder='Category'
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
