import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import { hot } from 'react-hot-loader';
import SliderComponent from '../components/SliderComponent';
import ButtonContainer from './ButtonContainer';
import IndexContainer from "./IndexContainer";
import CardContainer from "./CardContainer";
import DropDownContainer from "./DropDownContainer";
import ModalContainer from "./ModalContainer";
import ListGroupContainer from "./ListGroupContainer";
import PopoverContainer from "./PopoverContainer";
import TableContainer from "./TableContainer";

class RouterContainer extends React.Component{
	constructor(props,context){
		super(props)
	}

	render(){
		return(
			<BrowserRouter>
				<SliderComponent>
				    <Route exact path="/" component={ IndexContainer } />
                    <Route path="/button" component={ ButtonContainer } />
                    <Route path="/card" component={ CardContainer } />
                    <Route path="/dropdown" component={ DropDownContainer } />
                    <Route path="/modal" component={ ModalContainer } />
                    <Route path="/listGroup" component={ ListGroupContainer } />
                    <Route path="/popover" component={ PopoverContainer } />
				    <Route path="/table" component={ TableContainer } />
			    </SliderComponent>
		  	</BrowserRouter>
		)
	}
}

export default hot(module)(RouterContainer)
