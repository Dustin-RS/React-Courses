import React, {Component} from 'react'

import Spinner from '../spinner';

const withDataDetails = (View, itemId, getData, getImageUrl) => {
    return class extends Component{
        state = {
            item: null,
            image: null,
            loading: true
        };
    
        componentDidMount() {
            this.updateItem();
        }
        componentDidUpdate(pervProps) {
            if(itemId !== pervProps.itemId){
                if(!this.state.loading){
                    this.setState({
                        loading: true
                    });
                }
                this.updateItem();
            }
        }
        updateItem() {
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
            if(loading){
                return <Spinner />
            }
            return <View {...this.props} item={item} image={image}/>
        }
    }
}

export default withDataDetails;