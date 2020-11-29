import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="taskContainer">
      <h2 className="taskTitle">
        Завдання 4<span>Історія транзакцій</span>
      </h2>

      <table className={s.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((item) => (
            <tr key={item.id}>
              <td>{item.type} </td>
              <td>{item.amount} </td>
              <td>{item.currency} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
