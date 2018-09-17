

//set text filter
export const setTextFilter = (keyWord = '') => ({
    type: 'TEXT_FILTER',
    keyWord
});
//sort by date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})
//sort by amount 
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
})

//set startdate
export const setStartDate = ( startDate = undefined ) => ({
    type: 'SET_START_DATE',
    startDate
});

//set end date
export const setEndDate = ( endDate = undefined ) => ({
    type: 'SET_END_DATE',
    endDate
});