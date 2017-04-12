import React, { Component } from 'react';

export default class Field extends Component {
    checkWin(data) {
        let winner = {};

        // победа по горизонтальной линии
        for (let i = 0; i < data.length; i++) {
            if (data[i][0] === data[i][1] && data[i][1] === data[i][2] && data[i][0] !== null) {
                winner.line = `row-${i + 1}`;
                winner.name = data[i][0];
            }
        }

        // победа по вертикальной линии
        for (let j = 0; j < data[0].length; j++) {
            if (data[0][j] === data[1][j] && data[1][j] === data[2][j] && data[0][j] !== null) {
                winner.line = `col-${j + 1}`;
                winner.name = data[0][j];
            }
        }

        // победа по диагональной линии
        if (data[0][0] === data[1][1] && data[1][1] === data[2][2] && data[1][1] !== null) {
            winner.line = 'diagonal-1';
            winner.name = data[1][1];
        }
        if (data[0][2] === data[1][1] && data[1][1] === data[2][0] && data[1][1] !== null) {
            winner.line = 'diagonal-2';
            winner.name = data[1][1];
        }

        return winner;
    }

    onCellClick(event) {
        if (this.props.winner.name) {
            return;
        }

        const element = event.target;
        const { data, activePlayer } = this.props;

        let i = element.getAttribute('data-i');
        let j = element.getAttribute('data-j');

        if (data[i][j] !== null) {
            return;
        }

        data[i][j] = activePlayer;

        this.props.setData(data);

        let winner = this.checkWin(data);
        if (winner.name) {
            this.props.setWinner(winner);
            return;
        }

        this.props.setActivePlayer(activePlayer === 'X' ? 'O' : 'X');
    }

    render() {
        const { data, winner } = this.props;
        let cells = [];

        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                let value = data[i][j]
                cells.push(
                    <div onClick={::this.onCellClick}
                         data-i={i}
                         data-j={j}
                         className={`field__cell field__cell_${value}`}
                         key={3 * i + j}
                    >{value}</div>
                );
            }
        }

        return <div className={'field' + (winner.name ? ' field_win field_win-' + winner.line : '')}>
            {cells}
        </div>
    }
}
