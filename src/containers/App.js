import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Player from '../components/Player';
import Field from '../components/Field';
import * as fieldActions from '../actions/FieldActions';
import * as activePlayerActions from '../actions/ActivePlayerActions';

class App extends Component {
    render() {
        const { activePlayer, field } = this.props;
        const { setData } = this.props.fieldActions;
        const { setActivePlayer } = this.props.activePlayerActions;


        return <div className='container'>
            <div className='players'>
                <div className='players__O'>
                    <Player name='O' activePlayer={activePlayer.name} />
                </div>
                <div className='players__X'>
                    <Player name='X' activePlayer={activePlayer.name} />
                </div>
                <Field data={field.data}
                    activePlayer={activePlayer.name}
                    setData={setData}
                    setActivePlayer={setActivePlayer}
                />
            </div>
            
        </div>
    }
}

function mapStateToProps(state) {
    return {
        activePlayer: state.activePlayer,
        field: state.field
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fieldActions: bindActionCreators(fieldActions, dispatch),
        activePlayerActions: bindActionCreators(activePlayerActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
