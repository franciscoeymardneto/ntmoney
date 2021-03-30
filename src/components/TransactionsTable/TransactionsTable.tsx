import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable(){

  useEffect(() => {
    api.get('http://localhost:8080/api/transactions')
    .then(response => console.log(response.data));
  },[])

  return(
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
          <tr>
            <td>Web page development</td>
            <td className='deposit'>$12.000</td>
            <td>Development</td>
            <td>2021-02-20</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className='withdraw'>-$1.000</td>
            <td>house expense</td>
            <td>2021-02-01</td>
          </tr>
        
        </tbody>
      </table>
    </Container>
  )
}