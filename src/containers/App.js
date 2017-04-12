import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Player from '../components/Player'
import Field from '../components/Field'
import * as fieldActions from '../actions/FieldActions'

class App extends Component {
    render() {
        const { player, field } = this.props;
        const { setData } = this.props.fieldActions;

        return <div>
            <Player activePlayer={player.activePlayer} />
            <Field data={field.data} setData={setData} />
        </div>
    }
}

function mapStateToProps(state) {
    return {
        player: state.player,
        field: state.field
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fieldActions: bindActionCreators(fieldActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
