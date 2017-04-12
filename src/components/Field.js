import React, { Component } from 'react';

export default class Field extends Component {
    onCellClick(event) {
        const element = event.target;
        const { data, activePlayer } = this.props;

        let i = element.getAttribute('data-i');
        let j = element.getAttribute('data-j');

        if (data[i][j] !== null) {
            return;
        }
        
        data[i][j] = activePlayer;

        this.props.setData(data);
        this.props.setActivePlayer(activePlayer === 'X' ? 'O' : 'X');
    }

    render() {
        const { data } = this.props;
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

        return <div className='field'>
            {cells}
        </div>
    }
}
