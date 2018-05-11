import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss"
import Highlight from 'react-highlight';
import json from "./test"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreaters from '../../actions/postAction';

class Container extends React.Component {
    constructor(props,context){
        super(props);
        this.state = {
            loading: true
        }
        this.showData = this.showData.bind(this);
        this.hideData = this.hideData.bind(this);
    }
    componentDidMount() {
        const { items, getPostsAction } = this.props;
        getPostsAction();
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.items != nextProps.items) {
            this.setState({
                loading: false
            });
        }
    }
    showData(item, event) {
        $(event.target).popover('show');
    }
    hideData(event) {
        $(event.target).popover('hide');
    }
    render() {
        let textName = "测试按钮";
        const { loading } = this.state;
        const { items, getPostsAction } = this.props;
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


        const Widget = () => {
            if (!loading) {
                return (
                    <tbody>
                       {
                            items && items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td scope="row">{item.author_name}</td>
                                        <td>{item.title}</td>
                                        <td onMouseOver={ (event) => this.showData(item,event) }
                                        onMouseOut={ (event) => this.hideData(event) }>
                                            <img  data-container="body" data-toggle="popover"
                                            data-placement="left" data-content={item.title} className="popover_img" width="50"
                                            src={item.thumbnail_pic_s} />
                                        </td>
                                        <td>{item.date}</td>
                                    </tr>
                                )
                            })
                       }
                    </tbody>
                )
            } else {
                return (
                    <tbody><tr><td colSpan="4" className="loading_data">正在加载数据...</td></tr></tbody>
                )
            }
        }
        return (
            <div className="container-fluid box">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">BootStrap 4.0</a></li>
                        <li className="breadcrumb-item active" aria-current="page">按钮</li>
                    </ol>
                </nav>
                <button className="btn btn-light">{ textName }</button>
                <button className="btn btn-secondary">{ textName }</button>
                <button className="btn btn-primary">{ textName }</button>
                <button className="btn btn-warning">{ textName }</button>
                <button className="btn btn-success">{ textName }</button>
                <button className="btn btn-danger">{ textName }</button>
                <button className="btn btn-info">{ textName }</button>
                <button className="btn btn-dark">{ textName }</button>
                <hr/>
                <Highlight>{ btns }</Highlight>

                <table className="table  table-sm table-striped table-dark table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">姓名</th>
                            <th scope="col">标题</th>
                            <th scope="col">主题图片</th>
                            <th scope="col">发表日期</th>
                        </tr>
                    </thead>
                    <Widget />
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.posts.items
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
