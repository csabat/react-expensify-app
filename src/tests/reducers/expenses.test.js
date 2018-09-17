import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expenseReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});


test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }

    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const expense = {
        id: '4',
        description: 'Insurance',
        note: '',
        amount: 2500,
        createdAt: 1000
    }
    const action = {
        type: "ADD_EXPENSE",
        expense
    }

    const state = expenseReducer(expenses, action)
    expect(state).toEqual([...expenses, expense]);
});

test('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            note: 'new note'
        }
    }

    const state = expenseReducer(expenses, action);
    expect(state[1].note).toBe('new note');
});

test('should not edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            note: 'new note'
        }
    }

    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});