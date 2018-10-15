import React, { Component } from 'react';
import List from './List';
import CardService from '../../services/CardService';

export default class Cards extends Component {

    constructor() {
        super();

        this.state = {
            cards: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ cards: CardService.getCards() }));
    }

    render() {
        return (
            <div className="card_align">            
                <List cards={this.state.cards} />
            </div>   
        );
    }
}