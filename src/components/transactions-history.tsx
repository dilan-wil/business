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
        <div className={`type site-badge ${status === 'pending' ? 'badge-pending' : status === 'failed' ? 'badge-failed' : 'badge-success'}`}>{status}</div>
      </div>
      <div className="site-table-col">
        <div className="fw-bold">{method}</div>
      </div>
    </div>
  );
};

export const TransactionHistory: React.FC = () => {
  const transactions: Transaction[] = [
    {
      description: 'Withdraw With Bank Withdrawal-₦',
      transactionId: 'TRXNFXE9PF83V',
      type: 'Withdraw',
      amount: -68000.00,
      charge: -0,
      status: 'pending',
      method: 'Bank Withdrawal',
      date: '03 Dec 2024 02:41 PM',
      icon: 'icon-arrange-square',
    },
    {
      description: 'Withdraw With Bank Withdrawal-₦',
      transactionId: 'TRXMPFPQIGGV2',
      type: 'Withdraw',
      amount: -68000.00,
      charge: -0,
      status: 'success',
      method: 'Bank Withdrawal',
      date: '03 Dec 2024 02:41 PM',
      icon: 'icon-arrange-square',
    },
    {
      description: 'Withdraw With Bank Withdrawal-₦',
      transactionId: 'TRXU6KPM6RWO4',
      type: 'Refund',
      amount: 68050.00,
      charge: -0,
      status: 'failed',
      method: 'System',
      date: '03 Dec 2024 09:55 AM',
      icon: 'icon-money-change',
    },
  ];

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
                {transactions.map((transaction, index) => (
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
