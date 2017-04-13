import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Player from '../components/Player';
import Field from '../components/Field';
import NewGame from '../components/NewGame';
import { RESET_STATE } from '../constants/App'
import * as fieldActions from '../actions/FieldActions';
import * as activePlayerActions from '../actions/ActivePlayerActions';


class App extends Component {
    render() {
        const { activePlayer, field } = this.props;
        const { setData, setWinner } = this.props.fieldActions;
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
                    winner={field.winner}
                    activePlayer={activePlayer.name}
                    setData={setData}
                    setActivePlayer={setActivePlayer}
                    setWinner={setWinner}
                />
                <div className='actions'>
                    <NewGame resetState={this.props.resetState}/>
                </div>
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
        activePlayerActions: bindActionCreators(activePlayerActions, dispatch),
        resetState: bindActionCreators(function(state) {
            return {
                type: RESET_STATE,
                payload: state
            }
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
