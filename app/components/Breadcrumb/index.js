import React from 'react';
import './index.scss';

class Component extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { list } = this.props;
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {
                        list.map((item, index) => {
                            if (index == 0) {
                                return (<li key={ index } className="breadcrumb-item"><a href={ item.href }>{ item.name }</a></li>)
                            } else if (index == (list.length-1)) {
                                return (
                                    <li key={ index } className="breadcrumb-item active" aria-current="page">{ item.name }</li>
                                )
                            } else {
                                return (<li key={ index } className="breadcrumb-item"><a href={ item.href }>{ item.name }</a></li>)
                            }

                        })
                    }
                </ol>
            </nav>
        )
    }
}
export default Component;
