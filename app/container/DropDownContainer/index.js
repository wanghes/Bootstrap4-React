import React from 'react';
import style from "./index.scss";
import { Markup } from 'interweave';
import Highlight from 'react-highlight';
import { Toast, Alert, Breadcrumb } from '../../components/index';

const Dropdown = (props) => {
    return (
        <div className={ style['btn-group']+' btn-group' } role="group" aria-label="Button group with nested dropdown">
            <button type="button" className={`${style.btn}  btn btn-${props.theme}`}>{ props.name }</button>
            <button type="button" className={`${style.btn}  btn btn-${props.theme}`}>{ props.name }</button>
            <div className="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" className={ `btn btn-${props.theme} dropdown-toggle` } data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span>下拉菜单</span>
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Dropdown01</a>
                    <a className="dropdown-item" href="#">Dropdown02</a>
                    <a className="dropdown-item" href="#">Dropdown03</a>
                    <a className="dropdown-item" href="#">Dropdown04</a>
                </div>
            </div>
        </div>
    )
}

class Container extends React.Component {
    constructor(props,context){
        super(props);
        this.state = {
            name: '测试按钮',
            actions:
`const Dropdown = (props) => {
    return (
        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
            <button type="button" className="btn btn-danger"}>{ props.name }</button>
            <button type="button" className="btn btn-danger">{ props.name }</button>
            <div className="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span>下拉菜单</span>
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Dropdown01</a>
                    <a className="dropdown-item" href="#">Dropdown02</a>
                    <a className="dropdown-item" href="#">Dropdown03</a>
                    <a className="dropdown-item" href="#">Dropdown04</a>
                </div>
            </div>
        </div>
    )
}
`
        };
    }

    render() {
        const { name } = this.state;
        const breadcrumb = [{
            name:'BootStrap 4.1.1',
            href:"/"
        },{
            name:'下拉菜单'
        }];
        return (
            <div className="container-fluid box">
                <Breadcrumb list= { breadcrumb } />
                <Dropdown name={ name } theme="default" />
                <Dropdown name={ name } theme="secondary" />
                <Dropdown name={ name } theme="danger" />
                <Dropdown name={ name } theme="success" />
                <Dropdown name={ name } theme="info" />
                <Dropdown name={ name } theme="warning" />
                <hr/>
                <Highlight className="html">
                    { this.state.actions }
                </Highlight>
                {/*<pre dangerouslySetInnerHTML={{__html: this.state.actions}}></pre>
                <Markup content="This string <b>contains</b> HTML."/>
                <pre><code>{ this.state.actions }</code></pre>*/}

            </div>
        );
    };
};

export default Container;
