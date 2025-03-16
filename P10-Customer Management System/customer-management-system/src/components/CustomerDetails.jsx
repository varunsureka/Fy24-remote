import React from "react";

const CustomerDetails = ({ customer, onDeleteCustomer }) => {
  if (!customer) {
    return <div>No customer selected</div>
    // return a div with a message saying "No customer selected" when no customer is passed in
  }

  const handleDelete = () => {
    // handle the delete button click event
    onDeleteCustomer(customer.id);
  };

  return (
    <div>
      <h2>Customer Details</h2>
      <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete Customer
      </button>
    </div>
  );
};

export default CustomerDetails;