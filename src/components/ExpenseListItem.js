import React from 'react';
import { NavLink } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <NavLink activeClassName="is-active" to={"/edit/" + id}>{description}</NavLink>
        <p>{amount / 100}</p>
        <p>{createdAt}</p> 
    </div>
);


export default ExpenseListItem;