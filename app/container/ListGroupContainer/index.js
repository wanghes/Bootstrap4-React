import React from 'react';
import style from "./index.scss";
import { Markup } from 'interweave';
import Highlight from 'react-highlight';


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
        return (
            <div className="container-fluid box">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">BootStrap 4.0</a></li>
                        <li className="breadcrumb-item active" aria-current="page">列表组</li>
                    </ol>
                </nav>
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
