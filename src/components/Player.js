import React, { Component } from 'react';

export default class Player extends Component {
    render() {
        const { name, activePlayer } = this.props;

        return <div className={'player color-' + name + (name === activePlayer ? ' active' : '')}>
            {name}
        </div>
    }
}