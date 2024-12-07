import React from 'react';

interface Transaction {
  description: string;
  transactionId: string;
  type: string;
  amount: number;
  charge: number;
  status: string;
  method: string;
  date: string;
  icon: string;
}

interface TransactionRowProps extends Transaction {}

const TransactionRow: React.FC<TransactionRowProps> = ({
  description,
  transactionId,
  type,
  amount,
  charge,
  status,
  method,
  date,
  icon,
}) => {
  return (
    <div className="site-table-list">
      <div className="site-table-col">
        <div className="description">
          <div className="event-icon">
            <i className={icon}></i>
          </div>
          <div className="content">
            <div className="title">{description}</div>
            <div className="date">{date}</div>
          </div>
        </div>
      </div>
      <div className="site-table-col">
        <div className="trx fw-bold">{transactionId}</div>
      </div>
      <div className="site-table-col">
        <div className="type site-badge badge-primary">{type}</div>
      </div>
      <div className="site-table-col">
        <div className={`fw-bold ${amount < 0 ? 'red-color' : 'green-color'}`}>{amount} FCFA</div>
      </div>
      <div className="site-table-col">
        <div className={`fw-bold ${charge < 0 ? 'red-color' : 'green-color'}`}>{charge} FCFA</div>
      </div>
      <div className="site-table-col">
        <div
          className={`type site-badge ${
            status === 'pending' ? 'badge-pending' : status === 'failed' ? 'badge-failed' : 'badge-success'
          }`}
        >
          {status}
        </div>
      </div>
      <div className="site-table-col">
        <div className="fw-bold">{method}</div>
      </div>
    </div>
  );
};

interface TransactionHistoryProps {
  datas: any; // `datas` is of type any, which will be validated as an array.
  number?: number; // Optional parameter to limit the number of transactions displayed.
}

export const TransactionHistory: React.FC<TransactionHistoryProps> = ({ datas, number }) => {
  // Ensure `datas` is an array; otherwise, show an error.
  if (!Array.isArray(datas)) {
    return <div>Error: 'datas' must be an array of transactions.</div>;
  }

  // Limit the transactions based on the `number` parameter.
  const transactionsToDisplay = number ? datas.slice(0, number) : datas;

  return (
    <div className="col-xxl-12 py-9">
      <div className="recent-transactions-wrapper">
        <div className="site-card">
          <div className="site-card-header">
            <div className="site-card-title">Transactions Récentes</div>
          </div>
          <div className="site-card-body p-0 overflow-x-auto">
            <div className="site-custom-table">
              <div className="contents">
                <div className="site-table-list site-table-head">
                  <div className="site-table-col">Description</div>
                  <div className="site-table-col">ID de Transaction</div>
                  <div className="site-table-col">Type</div>
                  <div className="site-table-col">Montant</div>
                  <div className="site-table-col">Commission</div>
                  <div className="site-table-col">Statut</div>
                  <div className="site-table-col">Methode</div>
                </div>
                {transactionsToDisplay.map((transaction: Transaction, index: number) => (
                  <TransactionRow key={index} {...transaction} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
