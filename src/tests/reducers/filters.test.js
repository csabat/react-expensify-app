import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual(
        {
            text: '',
            sortBy: 'date',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
        }
    )
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortby to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = { type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
})

test('should set text filter', () => {
    const action = {
        type: 'TEXT_FILTER',
        keyWord: 'rent'
    }

    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('rent');
})

test('should set startDate', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment(0)
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment(0));
})

test('should set endDate', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment(0)
    }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(moment(0));
})
