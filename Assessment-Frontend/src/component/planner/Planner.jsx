import PlannerSlot from './PlannerSlot';
import PropTypes from 'prop-types';

const Planner = ({ onDrop, planner  }) => {
    const slots = ['Slot1', 'Slot2', 'Slot3', 'Slot4'];
const date = new Date()

const endDate = new Date();
endDate.setDate(endDate.getDate() + 7);
    return (
      <div>
        <h2 className="card-title">Planner Info from {date.toDateString()} to {endDate.toDateString()}</h2>
        {slots.map((slot, index) => (
          <PlannerSlot key={slot} slot={slot} onDrop={onDrop} customerName={planner[`slot${index + 1}`]} />
        ))}
      </div>
    );
}


Planner.propTypes = {
  onDrop: PropTypes.func.isRequired,
  planner: PropTypes.shape({
    slot1: PropTypes.string,
    slot2: PropTypes.string,
    slot3: PropTypes.string,
    slot4: PropTypes.string,
  }).isRequired,
};
export default Planner
