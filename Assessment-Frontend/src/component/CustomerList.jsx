import React from "react";
import Customer from "./Customer";

const CustomerList = ({ customers }) => {
  return (
    <div>
      <h2>Customer List</h2>
      {customers.map((customer) => (
        <Customer key={customer.id} customer={customer} />
      ))}
    </div>
  );
};

export default CustomerList;
