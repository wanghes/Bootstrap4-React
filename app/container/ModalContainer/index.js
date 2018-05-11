import React from 'react';
import style from "./index.scss";
import { Markup } from 'interweave';
import Highlight from 'react-highlight';


const Modal = (props) => {
    return (
        <div className="modal fade" id={props.id} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">{ props.title }</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        { props.children }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">关闭</button>
                        <button type="button" className="btn btn-sm btn-primary">保存</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

class Container extends React.Component {
    constructor(props,context){
        super(props);
        this.state = {
            html:`const Modal = (props) => {
    return (
        <div className="modal fade" id={props.id} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">{ props.title }</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        { props.children }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">关闭</button>
                        <button type="button" className="btn btn-sm btn-primary">保存</button>
                    </div>
                </div>
            </div>
        </div>
    )
}`
        };
    }
    componentDidMount() {
    }
    render() {
        const { name } = this.state;
        const alertInfo = () => {
            $('#exampleModalCenter').modal({
                show:true,
                backdrop: false
            });
        };
        return (
            <div className="container-fluid box">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">BootStrap 4.0</a></li>
                        <li className="breadcrumb-item active" aria-current="page">弹出层</li>
                    </ol>
                </nav>
                <button className="btn btn-secondary btn-sm" onClick={ alertInfo }>弹出</button>
                <Modal title="测试标题" id="exampleModalCenter">
                    <p>困了累了喝红牛，虚了尿了喝红牛</p>
                </Modal>
                <hr/>
                <Highlight className="html">
                    { this.state.html }
                </Highlight>
            </div>
        );
    };
};

export default Container;
