import React from "react";

const CustomerList = ({ customers, onSelectCustomer, onAddCustomer }) => {
  return (
    <div>
      <h2>Customer List</h2>
      <ul className="list-group">
        {customers.map((customer) => (
          <li
            key={customer.id}
            className="list-group-item"
            onClick={() => onSelectCustomer(customer)}
          >
            {customer.name}
          </li>
        ))}
      </ul>
      <button className="btn btn-success mt-3" onClick={onAddCustomer}>
        Add Customer
      </button>
    </div>
  );
};

export default CustomerList;