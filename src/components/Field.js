import React, { Component } from 'react';

export default class Field extends Component {
    onCellClick(event) {
        const element = event.target;
        const { data } = this.props;

        let i = element.getAttribute('data-i');
        let j = element.getAttribute('data-j');

        data[i][j] = 'X';

        this.props.setData(data);
    }

    render() {
        const { data } = this.props;
        let cells = [];
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                cells.push(
                    <div onClick={::this.onCellClick}
                         data-i={i}
                         data-j={j}
                         className='field__cell'
                         key={3 * i + j}
                    >{String(data[i][j])}</div>
                );
            }
        }

        return <div className='field'>
            {cells}
        </div>
    }
}
