import React, { Component } from 'react';
import Pizza from '../components/Pizza'

const PizzaList = (props) => {

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          props.pizzas.map(pizza => (
            <Pizza pizza={pizza}
              key={pizza.id}
              handleEditPizza={props.handleEditPizza} />
          ))
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
