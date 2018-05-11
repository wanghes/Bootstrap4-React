import React from 'react';
import ReactDOM from 'react-dom';
import Highlight from 'react-highlight';
import json from "./test";
import { Toast } from '../../components';
import "./index.scss";

class Container extends React.Component {
    constructor(props,context){
        super(props);
        this.clickHandle = this.clickHandle.bind(this);
    }
    componentDidMount() {
    }
    componentWillReceiveProps(nextProps) {
    }
    clickHandle(text) {
        Toast(text, 2000);
    }
    render() {
        let textName = "测试按钮";

        const btns =
`<button className="btn btn-light">{ textName }</button>
<button className="btn btn-secondary">{ textName }</button>
<button className="btn btn-primary">{ textName }</button>
<button className="btn btn-warning">{ textName }</button>
<button className="btn btn-success">{ textName }</button>
<button className="btn btn-danger">{ textName }</button>
<button className="btn btn-info">{ textName }</button>
<button className="btn btn-dark">{ textName }</button>
`



        return (
            <div className="container-fluid box">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">BootStrap 4.0</a></li>
                        <li className="breadcrumb-item active" aria-current="page">按钮</li>
                    </ol>
                </nav>
                <button className="btn btn-light" onClick={() => this.clickHandle(textName)}>{ textName }</button>
                <button className="btn btn-secondary" onClick={() => this.clickHandle(textName)}>{ textName }</button>
                <button className="btn btn-primary" onClick={() => this.clickHandle(textName)} >{ textName }</button>
                <button className="btn btn-warning" onClick={() => this.clickHandle(textName)}>{ textName }</button>
                <button className="btn btn-success" onClick={() => this.clickHandle(textName)}>{ textName }</button>
                <button className="btn btn-danger" onClick={() => this.clickHandle(textName)}>{ textName }</button>
                <button className="btn btn-info" onClick={() => this.clickHandle(textName)}>{ textName }</button>
                <button className="btn btn-dark" onClick={() => this.clickHandle(textName)}>{ textName }</button>
                <hr/>
                <Highlight>{ btns }</Highlight>
            </div>
        );
    }
}

export default Container;
