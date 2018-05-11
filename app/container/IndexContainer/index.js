import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreaters from '../../actions/counterAction';
import "./index.scss";

class Container extends React.Component{
	constructor(props,context){
		super(props)
	}
	render(){
        const { value, increaseAction, decreaseAction } = this.props;
		return (
			<div className="container-fluid box">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">BootStrap 4.0</a></li>
                    </ol>
                </nav>
				<h3 className="value_info">{ value }</h3>
                <hr/>
                <button className="btn btn-primary" onClick={ increaseAction }>Increase</button>
                <button className="btn btn-success" onClick={ decreaseAction }>decrease</button>
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
