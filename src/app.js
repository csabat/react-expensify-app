import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

//getVisibleExpenses
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
    console.log(visibleExpenses);
});

//add expense water bill

store.dispatch(addExpense({ description: 'Water bill', note: "no note", amount: 200 }));

//add expense gas bill

store.dispatch(addExpense({ description: 'Gas bill', note: "no note", amount: 500, createdAt: 1000 }));



store.dispatch(addExpense({ description: 'Rent', note: "no note", amount: 109500 }));
//setTextFilter bill 2 items -> water 1 item



// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

