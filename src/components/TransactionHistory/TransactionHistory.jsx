//import styles from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
  const elements = items.map(transaction =>
     <tr key={transaction.id}>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>)

  return (
    <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    {elements}
  </tbody>
</table>
  )

}

export default TransactionHistory
