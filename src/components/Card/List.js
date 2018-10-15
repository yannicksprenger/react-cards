import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const getCards = (cards) => {
    return (
        <div className="card-deck">
            {
                cards.map(card => <Card key={card.id} card={card} />)
            }
        </div>
    );
};

const List = (props) => (
    <div>
        {getCards(props.cards)}
    </div>
);

List.defaultProps = {
    cards: []
};

List.propTypes = {
    cards: PropTypes.array
};

export default List;