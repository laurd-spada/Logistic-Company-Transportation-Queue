import PropTypes from 'prop-types';
import Customer from "./Customer";

const CustomerList = ({ customers }) => {
  return (
    <div>
      <h2 className="card-title">Customer List</h2>
      {customers.length > 0 ? (
        customers.map((customer) => (
        <Customer key={customer.id} customer={customer} />
      ))
      ):(
        <p>There are currently no customers, ! Add  customers below</p>
      )}
    </div>
  );
};

CustomerList.propTypes = {
  customers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      customerName: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CustomerList;
