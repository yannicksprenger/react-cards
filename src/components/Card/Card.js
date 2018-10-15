import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => (
    <div className="card">
        <div className="card_padding">
            <h4 className="card-title">{props.card.title}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{props.card.subtitle}</h6>
            <p className="text-center" style={{fontSize: '14px'}}>{props.card.description}</p>
        </div>
    </div>
);

Card.defaultProps = {
    card: {}
};

Card.propTypes = {
    card: PropTypes.object
};

export default Card;