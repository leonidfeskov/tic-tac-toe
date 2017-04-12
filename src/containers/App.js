import React, { Component } from 'react';
import { connect } from 'react-redux';
import Player from '../components/Player'
import Field from '../components/Field'

class App extends Component {
    render() {
        const { player, field } = this.props;
        return <div>
            <Player activePlayer={player.activePlayer} />
            <Field data={field.data} />
        </div>
    }
}

function mapStateToProps(state) {
    return {
        player: state.player,
        field: state.field
    }
}

export default connect(mapStateToProps)(App);