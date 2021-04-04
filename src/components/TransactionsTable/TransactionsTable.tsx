import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formartPrice';
import { formatData } from '../../utils/formatData';
import { Container } from './styles';

interface Transactions {
  category: string
  id: string
  title: string
  type: string
  amount: number
  createdAt: Date
}
export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transactions[]>([])

  useEffect(() => {
    api.get('http://localhost:8080/api/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, [])

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