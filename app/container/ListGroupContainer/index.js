import React from 'react';
import style from "./index.scss";
import { Markup } from 'interweave';
import Highlight from 'react-highlight';
import { Toast, Alert, Breadcrumb } from '../../components/index';

const ListGroup = (props) => {
    return (
        <ul className="list-group">
            <li className="list-group-item active">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
        </ul>
    )
}

class Container extends React.Component {
    constructor(props,context){
        super(props);
        this.state = {
            name: '测试按钮',
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

    render() {
        const { name } = this.state;
        const breadcrumb = [{
            name:'BootStrap 4.1.1',
            href:"/"
        },{
            name:'列表组'
        }];
        return (
            <div className="container-fluid box">
                <Breadcrumb list= { breadcrumb } />
                <ListGroup />
                <hr/>
                <Highlight className="html">
                    { this.state.html }
                </Highlight>
            </div>
        );
    };
};

export default Container;
