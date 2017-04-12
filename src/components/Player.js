import React, { Component } from 'react';

export default class Player extends Component {
    render() {
        const { activePlayer } = this.props;

        return <div className='player'>
            activePlayer: {activePlayer}
        </div>
    }
}