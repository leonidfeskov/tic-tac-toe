import React, { Component } from 'react';

export default class Field extends Component {
    render() {
        const { data } = this.props;
        let cells = [];
        let i = 1;
        data.forEach(function(row) {
            row.forEach(function(cell) {
                cells.push(<div className='field__cell' key={i++}>{String(cell)}</div>);
            });
        });

        return <div className='field'>
            {cells}
        </div>
    }
}