import React from 'react';
import { connect } from 'react-redux';
import Highlight from 'react-highlight';
import { bindActionCreators } from 'redux';
import { Toast, Alert, Breadcrumb } from '../../components/index';
import * as actionCreaters from '../../actions/cardAction';
import "./index.scss"

const Card = (props) => {
    return (
        <div className="col-3">
            <div className="card">
                <img className="card-img-top" src={ props.pic } alt={ props.title } />
                <div className="card-body">
                    <h4 className="card-title">{ props.author }</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{ props.date }</h6>
                    <p className="card-text">{ props.title }</p>
                    <a href="javascript:;" onClick={props.clickHanlde} className="btn btn-primary">查看详细</a>
                </div>
            </div>
        </div>
    )
}
class Container extends React.Component {
    constructor(props,context){
        super(props);
        this.state = {
            loading: true,
            card: `const Card = (props) => {
    return (
        <div className="col-3">
            <div className="card">
                <img className="card-img-top" src={ img } alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">里明确地设置</h4>
                    <p className="card-text">里明确地设置 PostCSS 插件，并且只在当前文件执行它们.</p>
                    <a href="#" className="btn btn-primary">你要往哪走</a>
                </div>
            </div>
        </div>
    )
}`
        }
    }

    componentDidMount() {
        const { items, getCardsAction } = this.props;
        getCardsAction();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.items != nextProps.items) {
            this.setState({
                loading: false
            });
        }
    }
    clickHanlde(item) {
        Alert.error(item.title, {
            position: 'top-right',
            effect: 'jelly',
            timeout: 1500
        });
    }
    render() {
        const CardHtml = this.state.card;
        const { loading } = this.state;
        const { items } = this.props;
        const List = () => {
            if (!loading) {
                return (<div className="row no-gutters">
                    {
                        items && items.map((item, index) => {
                            return (<Card key={index} title={item.title} pic={item.thumbnail_pic_s} date={item.date}
                                author={item.author_name} clickHanlde={ () => this.clickHanlde(item) } />);
                        })
                    }
                </div>)

            } else {
                return (<div className="row no-gutters">正在加载数据...</div>)
            }
        }
        const breadcrumb = [{
            name:'BootStrap 4.1.1',
            href:"/"
        },{
            name:'卡片'
        }];
        return (
            <div className="container-fluid box">
                <Breadcrumb list= { breadcrumb } />
                <List />
                <hr/>
                <Highlight>{ CardHtml }</Highlight>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: state.cards.items
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
