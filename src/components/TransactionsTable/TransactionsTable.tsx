import { useEffect } from 'react';
import { Container } from './styles';

export function TransactionsTable(){

  useEffect(() => {
    fetch('http://localhost:8080/api/transactions')
    .then(response => response.json())
    .then(data => console.log(data));
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