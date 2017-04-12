import React, { Component } from 'react';

export default class Player extends Component {
    render() {
        const { name, activePlayer } = this.props;

        return <div className={'player' + (name === activePlayer ? ' player_active' : '')}>
            Игрок: <span className={`player__name player__name_${name}`}>{name}</span>
        </div>
    }
}