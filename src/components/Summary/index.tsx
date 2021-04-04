import { useContext } from 'react';
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../Contexts/TransactionsContext';
import { formatPrice } from '../../utils/formartPrice';
import { Container } from './styles';

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    }else{
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }
    return acc
  },{
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
   <Container>
     <div>
       <header>
         <p>Incomes</p>
         <img src={IncomeImg} alt='Incomes'/>
       </header>
       <strong>{formatPrice(summary.deposits)}</strong>
     </div>
     <div>
       <header>
         <p>Withdraws</p>
         <img src={OutcomeImg} alt='Withdraws'/>
       </header>
       <strong>-{formatPrice(summary.withdraws)}</strong>
     </div>
     <div className='highlight-background'>
       <header>
         <p>Total</p>
         <img src={TotalImg} alt='TotalImg'/>
       </header>
       <strong>{formatPrice(summary.total)}</strong>
     </div>
   </Container> 
  )
}