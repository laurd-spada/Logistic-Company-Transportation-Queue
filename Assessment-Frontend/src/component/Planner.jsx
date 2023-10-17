import React from 'react'
import PlannerSlot from './PlannerSlot';

const Planner = ({ onDrop, planner  }) => {
    const slots = ['Slot1', 'Slot2', 'Slot3', 'Slot4'];

    return (
      <div>
        <h2>Planner Info</h2>
        {slots.map((slot, index) => (
          <PlannerSlot key={slot} slot={slot} onDrop={onDrop} customerName={planner[`slot${index + 1}`]} />
        ))}
      </div>
    );
}

export default Planner
