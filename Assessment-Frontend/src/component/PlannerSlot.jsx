import React from 'react'
import { useDrop } from 'react-dnd';

const PlannerSlot = ({ slot, onDrop, customerName }) => {
    const [, drop] = useDrop({
        accept: 'CUSTOMER',
        drop: item => onDrop(item.id, slot),
      });
      return (
        <div ref={drop} style={{ border: '1px dashed #ddd', padding: '8px', marginBottom: '8px' }}>
          {customerName && <strong>{customerName}</strong>}
      {!customerName && slot}
          
        </div>
      );
}

export default PlannerSlot
