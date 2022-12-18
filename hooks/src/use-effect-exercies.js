import React, {Component, useEffect, useState} from 'react'
import ReactDOM from 'react-dom'

const MyContext = React.createContext();

const App = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);
    
    if(visible){
        return(
            <div>
                <button
                    onClick={() => setValue((v) => v + 1)}>
                    +
                </button>
                <button
                    onClick={()=> setVisible(false)}>
                    hide
                </button>
                <Notification value="Hello"/>
                <HookCounter value={value}/>
            </div>
        );
    }else{
        return <button 
                onClick={() => setVisible(true)}>
            show
        </button>
    }
};

const Notification =( { value } ) =>{
    const [visible, setVisible] = useState(true);
    useEffect( () => {
        const timeOut = setTimeout( ()=> setVisible(false), 1500);

        return () => clearTimeout(timeOut);
    })

    return <div>{ visible && <p>Hello</p>}</div>
}

const HookCounter = ( { value } )=> {
    useEffect( () => {
        console.log(' useEffect() ');
        return () => console.log('clear');
    });
    return <p>{value}</p>;
};
class ClassCounter extends Component {
    componentDidMount() {
        console.log('Class: mount');
    }
    componentDidUpdate() {
        console.log('Class: update');
    }
    componentWillUnmount() {
        console.log('Class: unmount');
    }
    render() {
        return <p>{this.props.value}</p>;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));