import React from 'react'
import { useDrag } from 'react-dnd';

const Customer = ({ customer }) => {
    const [, drag] = useDrag({
        type: 'CUSTOMER',
        item: { id: customer.id, type: 'CUSTOMER', customerName: customer.customerName  },
      });
    
      return (
        <div ref={drag} style={{ border: '1px solid #ddd', padding: '8px', marginBottom: '8px', cursor: 'move' }}>
          {customer.customerName}
        </div>
      );
}

export default Customer
