import PropTypes from 'prop-types';

const Card = ({ children }) => {
  return (
      <div className="card">
        <div className="card-body pt-4 d-flex flex-column">
          {children}
        </div>
      </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;