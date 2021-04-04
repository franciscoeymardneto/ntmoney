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
interface TransactionsContextData {
  transactions: Array<Transactions>
  createTransaction: (transaction: TransactionsInput) => void
}

type TransactionsInput = Omit<Transactions, 'id' | 'createdAt'>

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionProvider(props: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([])

  useEffect(() => {
    api.get('http://localhost:8080/api/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, [])

  function createTransaction(transaction: TransactionsInput) {

    api.post('/transactions',transaction)
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {props.children}
    </TransactionsContext.Provider>
  )
}