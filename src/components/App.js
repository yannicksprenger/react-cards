import React, { Component } from 'react';
import Header from './Header';
import Cards from './Card/Cards';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Cards'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <div className="mt-5">
                    <Cards />
                </div>
            </div>
        );
    }
}