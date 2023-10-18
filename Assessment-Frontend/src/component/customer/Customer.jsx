import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';

const Customer = ({ customer }) => {
    const [, drag] = useDrag({
        type: 'CUSTOMER',
        item: { id: customer.id, type: 'CUSTOMER', customerName: customer.customerName  },
      });
      return (
        <div ref={drag} style={{ border: '1px solid #ddd', padding: '8px', marginBottom: '8px', cursor: 'move' }}>
          <div>Customer Id: {customer.customerId}</div>
          <div>Customer Name: {customer.customerName}</div>
          <div>Pickup Location: {customer.pickUpLocation}</div>
          <div>Drop off Location: {customer.dropOffLocation}</div>
        </div>
      );
}

Customer.propTypes = {
  customer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    customerId: PropTypes.string.isRequired,
    customerName: PropTypes.string.isRequired,
    pickUpLocation: PropTypes.string.isRequired,
    dropOffLocation: PropTypes.string.isRequired,
  }).isRequired,
};
export default Customer
