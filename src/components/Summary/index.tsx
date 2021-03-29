import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'
import { Container } from './styles';

export function Summary() {
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
         <p>Outcomes</p>
         <img src={OutcomeImg} alt='Outcomes'/>
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