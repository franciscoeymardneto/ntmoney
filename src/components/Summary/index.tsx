import { useContext } from 'react';
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../Contexts/TransactionsContext';
import { Container } from './styles';

export function Summary() {
  const { transactions } = useContext(TransactionsContext)
  return (
   <Container>
     <div>
       <header>
         <p>Incomes</p>
         <img src={IncomeImg} alt='Incomes'/>
       </header>
       <strong>$ 1000</strong>
     </div>
     <div>
       <header>
         <p>Withdraws</p>
         <img src={OutcomeImg} alt='Withdraws'/>
       </header>
       <strong>$ -500</strong>
     </div>
     <div className='highlight-background'>
       <header>
         <p>Total</p>
         <img src={TotalImg} alt='TotalImg'/>
       </header>
       <strong>$ 500</strong>
     </div>
   </Container> 
  )
}