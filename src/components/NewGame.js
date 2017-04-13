import React, { Component } from 'react';


export default class NewGame extends Component {
    onButtonClick() {
        this.props.resetState(undefined);
    }

    render() {
        return <button className='button' onClick={::this.onButtonClick}>Новая игра</button>
    }
}
