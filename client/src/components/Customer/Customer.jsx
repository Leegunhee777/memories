import * as React from 'react';
import './Customer.css';
import Description from '../Description';
import Customerdetail from '../Customerdetail';
export default class Customer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false
        };
        this.handleClick=this.handleClick.bind(this);
        this.toChange=this.toChange.bind(this);
    }

    handleClick(e){
     this.toChange(true); 
    }
    toChange(isOpen){
        this.setState({isOpen});
    }
    render() { 
        return (
            <span>
                    {this.state.isOpen ?
               <Description
               tochange={this.toChange} //toChange함수를 tochange로 받고있음 오류 주의
               isOpen={this.state.isOpen}
               image={this.props.image}
               category={this.props.category}
               title={this.props.title}
               text={this.props.text}
               createDate={this.props.createDate}
               wedo={this.props.wedo}
               kungdo={this.props.kungdo}
              stateRefresh={this.props.stateRefresh} 
              id={this.props.id}
           />:false
                    }
            
           <span>
        <Customerdetail title = {this.props.title} image={this.props.image} handleClick={this.handleClick}/>
           
           
            
       
              
             </span>
             <span>
        
           </span>
           </span>
             
        );
    }
}

 {/*} <img src={"http://localhost:5000"+this.props.image} width='150' height='150' onClick={this.handleClick}/>
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={"http://localhost:5000"+this.props.image} width='150' height='150' onClick={this.handleClick}/></TableCell> 
                <TableCell>{this.props.category}</TableCell>
                <TableCell>{this.props.title}</TableCell>
                <TableCell>{this.props.text}</TableCell>
                <TableCell>{this.props.wedo}</TableCell>
                <TableCell>{this.props.kungdo}</TableCell>
                <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/></TableCell>
            </TableRow>
        */}