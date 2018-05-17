import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreaters from '../../actions/counterAction';
import "./index.scss";
const img  = require('../../assets/images/s.jpg');

class Container extends React.Component{
	constructor(props,context){
		super(props)
	}
	render(){
        const { value, increaseAction, decreaseAction } = this.props;
		return (
			<div className="container-fluid box">
                <div className="alert alert-info">
                    <h3>BootStrap 4.1.1</h3> start learn
                </div>
				<h3 className="value_info">{ value }</h3>
                <hr/>
                <button className="btn btn-primary" onClick={ increaseAction }>Increase</button>
                <button className="btn btn-danger" onClick={ decreaseAction }>decrease</button>
                <hr />
                <img width="200" src={ img } alt="Card image cap" />
			</div>
		)
	}
}

function mapStateToProps(state) {
    return {
        value: state.counter.count
    }
}

function mapDispatchToProps(dispatch) {
    let boundActionCreators = bindActionCreators(actionCreaters, dispatch)
    return boundActionCreators;
}


const ContainerWrap = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);

export default ContainerWrap
