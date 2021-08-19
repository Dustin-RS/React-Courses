import React, {Component} from 'react'
import ErrorIndicator from '../error-indicator';

import Spinner from '../spinner'

const withData = (View) => {
    return class extends Component{
        state = {
            data: null,
            loading: true,
            error: false
        };
    
        componentDidUpdate(pervProps) {
            if(this.props.getData !== pervProps.getData){
                this.update();
            }
        }

        componentDidMount() {
            this.update();
        }

        update() {
            this.setState({
                loading:true,
                error: false
            });
            
            this.props.getData()
            .then((data) => {
                this.setState({
                    data,
                    loading: false
                });
            })
            .catch( () => {
                this.setState({
                    loading: false,
                    error: true
                });
            });
        }

        render() {
            const { data, loadign, error  } = this.state;
            if( loadign || !data){
                return <Spinner />
            }
            if( error ){
                return <ErrorIndicator/>
            }
            return <View {...this.props} data={data}/>
        }
    }
};

export default withData;
