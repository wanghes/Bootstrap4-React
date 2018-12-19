import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from "./index.scss";
import { Markup } from 'interweave';
import Highlight from 'react-highlight';
import * as actionCreaters from '../../actions/postAction';
import { Toast, Alert, Breadcrumb } from '../../components/index';

const ListGroup = (props) => {
    const { list } = props;
    return (
        <ul className="list-group">
            {
                list && list.map((item, index) => {
                    let active = index == 0 ? 'list-group-item active' : 'list-group-item';
                    return (<li key={ index } className={ active }>{ item.title }</li>);
                })
            }
        </ul>
    )
}

class Container extends React.Component {
    constructor(props,context){
        super(props);
        this.state = {
            html:
`<ul class="list-group">
    <li class="list-group-item active">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Morbi leo risus</li>
    <li class="list-group-item">Porta ac consectetur ac</li>
    <li class="list-group-item">Vestibulum at eros</li>
</ul>
`
        };
    }

    componentDidMount() {
        const { getListsAction } = this.props;
        getListsAction();
    }

    render() {
        const { name } = this.state;
        const { items } = this.props;

        const breadcrumb = [{
            name:'BootStrap 4.1.1',
            href:"/"
        },{
            name:'列表组'
        }];
        return (
            <div className="container-fluid box">
                <Breadcrumb list= { breadcrumb } />
                <ListGroup list={ items } />
                <hr/>
                <Highlight className="html">
                    { this.state.html }
                </Highlight>
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        items: state.posts.listGroup
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

export default ContainerWrap;
