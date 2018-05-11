import React from 'react';
import "../assets/js/lib/metisMenu.min";
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import {  Alert } from '../components/index';

class Component extends React.Component{
	constructor(props,context){
		super(props);
		this.state = {
		};
        this.searchFunc = this.searchFunc.bind(this);
	}
    componentDidMount(){
        $('#metisMenu').metisMenu({ toggle: true });
    }
    searchFunc() {
        return false;
    }
	render(){
        const { children } = this.props;
		return(
			<div className="wrap">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="collapse navbar-collapse">
                        <Link className="navbar-brand" to="/">React & BootStrap 4.0</Link>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                              <Link className="nav-item nav-link active" to="/">首页</Link>
                            </div>
                        </div>
                    </div>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="请填写搜索关键字" />
                        <button className="btn btn-outline-danger my-2 my-sm-0" onClick={ this.searchFunc }
                        type="button">搜索</button>
                    </form>
                </nav>
                <div className="side-nav sidebar-nav">
                    <ul className="metismenu" id="metisMenu">
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="true">
                                <FontAwesome className="icon_menu" name="github" />
                                <span>组件开发</span>
                            </a>
                            <ul aria-expanded="true" className="collapse in">
                                <li>
                                    <Link to="/button">
                                        <FontAwesome className="icon_menu" name="code-fork" /> 按钮
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/card">
                                        <FontAwesome className="icon_menu" name="star" /> 卡片
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dropdown">
                                        <FontAwesome className="icon_menu" name="exclamation-triangle" /> 下拉菜单
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/modal">
                                        <FontAwesome className="icon_menu" name="rocket" /> 弹出层
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/listGroup">
                                        <FontAwesome className="icon_menu" name="list" /> 列表组
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/popover">
                                        <FontAwesome className="icon_menu" name="space-shuttle" /> Popover
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/table">
                                        <FontAwesome className="icon_menu" name="table" /> 表格
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">Menu 0</a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="#">item 0.1</a></li>
                                <li><a href="#">item 0.2</a></li>
                                <li><a href="#">onokumus</a></li>
                                <li><a href="#">item 0.4</a></li>
                            </ul>
                        </li>
                        <li id="removable">
                            <a className="has-arrow" href="#" aria-expanded="false">Menu 1</a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="#">item 1.1</a></li>
                                <li><a href="#">item 1.2</a></li>
                                <li>
                                    <a className="has-arrow" href="#" aria-expanded="false">Menu 1.3</a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><a href="#">item 1.3.1</a></li>
                                        <li><a href="#">item 1.3.2</a></li>
                                        <li><a href="#">item 1.3.3</a></li>
                                        <li><a href="#">item 1.3.4</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">item 1.4</a></li>
                                <li>
                                    <a className="has-arrow" href="#" aria-expanded="false">Menu 1.5</a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><a href="#">item 1.5.1</a></li>
                                        <li><a href="#">item 1.5.2</a></li>
                                        <li><a href="#">item 1.5.3</a></li>
                                        <li><a href="#">item 1.5.4</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">Menu 2</a>
                            <ul aria-expanded="true" className="collapse">
                                <li><a href="#">item 2.1</a></li>
                                <li><a href="#">item 2.2</a></li>
                                <li><a href="#">item 2.3</a></li>
                                <li><a href="#">item 2.4</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="container_wrap">
                    { children }
                </div>
                <Alert stack={{limit: 4}} />
            </div>
		)
	}
}

export default Component;
