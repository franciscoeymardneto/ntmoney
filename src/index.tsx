import React from 'react'
import ReactDom from 'react-dom'
import { createServer } from 'miragejs'
import { App }from './App'

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()

        }
      ]
    })
  }
})
ReactDom.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)