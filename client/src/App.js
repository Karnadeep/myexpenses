import React, { useEffect } from 'react';
import './styles/app.css';
//import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction'



//Redux
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <section className="bg-gray-100 w-full sm:w-3/4 h-screen items-center content-center lg :w-1/2">
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </section>
    </Provider>
  );
}

export default App;
