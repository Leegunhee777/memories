import * as React from 'react';
import './Customerdetail.css';

export default class Customerdetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };

    
    }
    render() { 
        return (
            <div  className='bal' style={{
                width: '41%',
                float: 'left'
            }}>
              
                <img src={"http://localhost:5000"+this.props.image} width='80' height='100' onClick={this.props.handleClick}/><br/>
              ({this.props.title})
            </div>
                  
             
        );
    }
}

 