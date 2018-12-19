import React from 'react';
import style from "./index.scss";
import { Markup } from 'interweave';
import Highlight from 'react-highlight';
import { Toast, Alert, Breadcrumb, Modal } from '../../components/index';


class Container extends React.Component {
    constructor(props,context){
        super(props);
        this.state = {
            html:`<Modal title="测试标题" id="exampleModalCenter">
    <p>困了累了喝红牛，虚了尿了喝红牛</p>
</Modal>`,
            show: false
        };
        this.alertInfo = this.alertInfo.bind(this);
        this.okFunc = this.okFunc.bind(this);
    }
    componentDidMount() {
    }
    alertInfo() {
        this.setState({
            show: true
        });
    }
    okFunc() {
        Alert.success("数据保存成功", {
            position: 'top-right',
            effect: 'jelly',
            timeout: 1500
        });
        this.setState({
            show: false
        });
    }
    render() {
        const { name, show } = this.state;

        const breadcrumb = [{
            name:'BootStrap 4.1.1',
            href:"/"
        },{
            name:'弹出层'
        }];
        return (
            <div className="container-fluid box">
                <Breadcrumb list={ breadcrumb } />
                <Highlight className="html">
                    { this.state.html }
                </Highlight>
                <hr/>
                <button className="btn btn-secondary btn-lg" onClick={ this.alertInfo }>弹出</button>
                <Modal title="测试标题" id="exampleModalCenter" show={ show } okFunc={ this.okFunc }>
                    <p>困了累了喝红牛，虚了尿了喝红牛</p>
                </Modal>
            </div>
        );
    };
};

export default Container;
