import React, { useState } from "react";
import CustomerList from "./CustomerList";
import CustomerDetails from "./CustomerDetails";

const RetailCRM = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Customer 1",
      email: "customer1@example.com",
      phone: "1234567890",
    },
    {
      id: 2,
      name: "Customer 2",
      email: "customer2@example.com",
      phone: "9876543210",
    },
    {
      id: 3,
      name: "Customer 3",
      email: "customer3@example.com",
      phone: "5678901234",
    },
  ]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isAddingCustomer, setIsAddingCustomer] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer)
    // write the logic to select a customer
  };

  const handleAddCustomer = () => {
    setIsAddingCustomer(true);
    // write the logic to add a customer
  };

  const handleSaveCustomer = () => {
    setCustomers((customers) => [...customers, {...newCustomer, id: customers.length}]);
    setIsAddingCustomer(false);
    // write the logic to save a customer & its details as well as hide the add customer form
  };

  const handleDeleteCustomer = (customerId) => {
    setCustomers((customers) => customers.filter((customer) => customer.id !== customerId));
    setSelectedCustomer(null);
    // write the logic to delete a customer and update the selected customer to null
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer((prevCustomer) => ({ ...prevCustomer, [name]: value }));
  };

  return (
    <div className="container mt-5">
      <h1>Retail CRM</h1>
       {/* write a heading for the page "Retail CRM" using h1 tag */}
      <div className="row">
        <div className="col-md-4">
          {/* render the customer list and pass the valid props correctly */}
          <CustomerList customers={customers} onSelectCustomer = {handleSelectCustomer} onAddCustomer={handleAddCustomer}/>
        </div>
        <div className="col-md-8">
          {/* render the customer details and pass the valid props correctly */}
          <CustomerDetails customer={selectedCustomer} onDeleteCustomer={handleDeleteCustomer}/>
          {isAddingCustomer && (
            <div className="mt-4">
              <h4>Add Customer</h4>
              <form>
                <div className="form-group">
                  <label htmlFor="nameInput">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    name="name"
                    value={newCustomer.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emailInput">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    name="email"
                    value={newCustomer.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneInput">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneInput"
                    name="phone"
                    value={newCustomer.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSaveCustomer}
                >
                  Save
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RetailCRM;