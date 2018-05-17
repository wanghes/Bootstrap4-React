import React from 'react';
import style from "./index.scss";
import { Markup } from 'interweave';
import Highlight from 'react-highlight';
import { Toast, Alert, Breadcrumb } from '../../components/index';

const Popover = (props) => {
    return (
        <button type="button"
        className="btn btn-sm btn-secondary"
        data-container="body"
        data-toggle="popover"
        data-placement={ props.position }
        data-content={ props.content }>
            { props.children }
        </button>
    )
}

class Container extends React.Component {
    constructor(props,context){
        super(props);
        this.state = {
            name: '测试按钮',
            html:
`<button type="button" className="btn btn-sm btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
    Popover on left
</button>
`
        };
    }

    componentDidMount() {
        $('[data-toggle]').popover({
            trigger: 'hover'
        });
    }

    render() {
        const { name } = this.state;
        const breadcrumb = [{
            name:'BootStrap 4.1.1',
            href:"/"
        },{
            name:'Popover'
        }];

        return (
            <div className="container-fluid box">
                <Breadcrumb list={ breadcrumb } />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Popover
                position="top"
                content="最经典的方法，使用Array的slice方法，此方法如果不传参数的话会返回原数组的一个拷贝">
                    <span>{name}</span>
               </Popover>
                <Popover
                position="top"
                content="最经典的方法，使用Array的slice方法，此方法如果不传参数的话会返回原数组的一个拷贝，因此可以用此方法转换类数组到数组">
                    <span>{name}</span>
                </Popover>
                <Popover
                position="top"
                content="最经典的方法，使用Array的slice方法，此方法如果不传参数的话会返回原数组的一个拷贝，因此可以用此方法转换类数组到数组">
                    <span>{name}</span>
                </Popover>
                <Popover
                position="bottom"
                content="最经典的方法，使用Array的slice方法，此方法如果不传参数的话会返回原数组的一个拷贝，因此可以用此方法转换类数组到数组">
                    <span>{name}</span>
                </Popover>
                <hr/>
                <Highlight className="html">
                    { this.state.html }
                </Highlight>
            </div>
        );
    };
};

export default Container;
