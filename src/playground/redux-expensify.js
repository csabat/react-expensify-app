import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//add expense







//Get visible expenses





store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
    console.log(visibleExpenses);
});




const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 200, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 500, createdAt: -1000}));

// //console.log(expenseTwo.expense.id);
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

 //store.dispatch(setTextFilter('coffee'));
// store.dispatch(setTextFilter());

 //store.dispatch(sortByAmount()); //amount
 //store.dispatch(sortByDate()); //date

//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
//

//store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [{
        id: 'fdashiornb',
        description: 'January Rent',
        note: 'This is the final rent',
        amount: 54500,
        createdAt: 0 
    }],
    filter: {
        text: 'rent',
        sortBy: 'amount', //date of value
        startDate: undefined,
        endDate: undefined
    }
};



