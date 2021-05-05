import React from 'react';
import Header from '../../components/Header/Header';
import CashStatement from '../../components/CashStatement/CashStatement';

const CashStatementPage = props => {
  const arrTransactions = [
    { id: 5, received: 300, spend: 150 },
    { id: 23, received: 2222, spend: 333 },
    { id: 5, received: 300, spend: 150 },
    { id: 23, received: 2222, spend: 333 },
    { id: 5, received: 300, spend: 150 },
    { id: 23, received: 2222, spend: 333 },
    { id: 5, received: 300, spend: 150 },
    { id: 23, received: 2222, spend: 333 },
  ];
  const totalRecived = 10000;
  const totalSpend = 5000;
  return (
    <div>
      <Header />
      <CashStatement arrTransactions={arrTransactions} totalRecived={totalRecived} totalSpend={totalSpend}/>
    </div>
  );
};

export default CashStatementPage;
