import * as React from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { MdArrowCircleDown } from "react-icons/md";
import './TransationTable.css';

export default function TransactionTable() {
  const data = [
  
    {
      type: 'down',
      description: 'Freepik Sales',
      transactionId: '#12548796',
      transactionType: 'Transfer',
      card: '@1234 ****',
      date: '25 Jan, 10.40 PM',
      amount: '+$750',
    },
   
    
    {
      type: 'up',
      description: 'Freepik Sales',
      transactionId: '#12548796',
      transactionType: 'Transfer',
      card: '@1234 ****',
      date: '25 Jan, 10.40 PM',
      amount: '-$750',
    },
    {
      type: 'down',
      description: 'Freepik Sales',
      transactionId: '#12548796',
      transactionType: 'Transfer',
      card: '@1234 ****',
      date: '25 Jan, 10.40 PM',
      amount: '+$750',
    },
    {
      type: 'up',
      description: 'Freepik Sales',
      transactionId: '#12548796',
      transactionType: 'Transfer',
      card: '@1234 ****',
      date: '25 Jan, 10.40 PM',
      amount: '-$750',
    },
  ];

  return (
    <div className="transation-table-main">
    <h2>Recent Transactions</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="transition-table-heads" scope="col">Description</th>
            <th className="transition-table-heads" scope="col">Transaction ID</th>
            <th className="transition-table-heads" scope="col">Type</th>
            <th className="transition-table-heads" scope="col">Card</th>
            <th className="transition-table-heads" scope="col">Date</th>
            <th className="transition-table-heads" scope="col">Amount</th>
            <th className="transition-table-heads" scope="col">Receipt</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row" className={`table-row-Transition-${item.type}`}>
                {item.type === 'up' ? (
                  <IoArrowUpCircleOutline className="IoArrowUpCircleOutline-transition-table" />
                ) : (
                  <MdArrowCircleDown className={`IoArrowUpCircleOutline-transition-table-${item.type}`} />
                )}
                <ins className="ing-table-line">
                  <p>{item.description}</p>
                </ins>
              </th>
              <td>{item.transactionId}</td>
              <td>{item.transactionType}</td>
              <td>{item.card}</td>
              <td>{item.date}</td>
              {/* Set text color based on the amount's sign */}
              <td style={{ color: item.amount.includes('-') ? 'red' : 'green' }}>{item.amount}</td>
              <td className="transition-table-btn">
                <button>invoice</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
