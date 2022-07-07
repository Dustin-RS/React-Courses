import React, { Component } from 'react'

import Spinner from '../spinner';
import ErrorButton from '../error-button'

import './item-details.css'

const Record = ( {item, field, label} ) => {
    return(
        <li className="list-group-item">
            <span className="term">{label}: </span>
            <span>{ item[field] }</span>
        </li>
    );
};

export {
    Record
};
export default class ItemDetails extends Component{

    state = {
        item: null,
        image: null,
        loading: true
    };

    componentDidMount() {
        this.updateItem();
    }
    componentDidUpdate(pervProps) {
        if(this.props.itemId !== pervProps.itemId ||
            this.props.getData !== pervProps.getData ||
            this.props.getImageUrl !== pervProps.getImageUrl){
            if(!this.state.loading){
                this.setState({
                    loading: true
                });
            }
            this.updateItem();
        }
    }
    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if(!itemId){
            return;
        }

        getData(itemId)
        .then( (item) => {
            this.setState({
                item,
                image: getImageUrl(item),
                loading: false
            });
        });
    }
    render() {
        const {item, image, loading} = this.state;
        if(!item){
            return <span>Select an item from a list</span>
        }
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <ItemView item={item} image={image} children={this.props.children}/> : null;
        return (
            <div className="item-details card">
                {spinner}
                {content}
            </div>
        );
    }
}
const ItemView = ({ item, image, children }) => {
    const {name} = item;
    return(
        <React.Fragment>
            <img className="item-image"
                 src={image} alt="item-img"/>
                
            <div className="card-body">
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(children, (child) => {
                            return React.cloneElement(child, {item});
                        })
                    }
                </ul>
                <ErrorButton />
            </div>  
        </React.Fragment>
    );
}