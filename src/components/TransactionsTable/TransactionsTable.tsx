import { useContext } from 'react';
import { TransactionsContext } from '../../Contexts/TransactionsContext';
import { formatPrice } from '../../utils/formartPrice';
import { formatData } from '../../utils/formatData';
import { Container } from './styles';

export function TransactionsTable() {

  const { transactions } = useContext(TransactionsContext)

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {
            transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>{formatPrice(transaction.amount)}</td>
                  <td>{transaction.category}</td>
                  <td>{formatData(new Date(transaction.createdAt))}</td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </Container>
  )
}