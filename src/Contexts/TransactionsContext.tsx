import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api';

interface Transactions {
  category: string
  id: string
  title: string
  type: string
  amount: number
  createdAt: Date
}

interface TransactionsProviderProps{
  children: ReactNode
}

export const TransactionsContext = createContext<Transactions[]>([])

export function TransactionProvider(props: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([])

  useEffect(() => {
    api.get('http://localhost:8080/api/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, [])

  return (
    <TransactionsContext.Provider value={transactions}>
      {props.children}
    </TransactionsContext.Provider>
  )
}