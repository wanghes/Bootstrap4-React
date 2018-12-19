import React from 'react';
import './index.scss';

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show
        }
        this.okFunction = this.okFunction.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { show, id } = nextProps;
        this.setState({
            show
        })
        if (show) {
            $('#'+id).modal({
                show:true,
                backdrop: false
            });
        } else {
            $('#'+id).modal('hide');
        }
    }
    componentDidMount() {
        const { id } = this.props;
        $('#'+id).on('hidden.bs.modal', (e) => {
            this.setState({
                show: false
            })
        });
    }

    okFunction() {
        const { okFunc } = this.props;
        okFunc();
    }

    render() {
        const { id, title, children, okFunc } = this.props;
        const { show } = this.state;

        return (
            <div className="modal fade" id={ id } role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">{ title }</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            { children }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">关闭</button>
                            <button type="button" className="btn btn-sm btn-primary" onClick={ this.okFunction }>保存</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Component;
