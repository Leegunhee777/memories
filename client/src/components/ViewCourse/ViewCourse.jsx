import * as React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from '../CustomerDelete';
import Button from '@material-ui/core/Button';
import ViewProduct from '../ViewProduct';
import ViewDetail from '../ViewDetail';
export default class ViewCourse extends React.Component {
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
           
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell>{this.props.category}</TableCell>
                <TableCell>{this.props.title}</TableCell>
                <TableCell><ViewProduct markers ={this.props.markers}/></TableCell>
                <Button variant ="contained" color="primary" onClick={this.handleClick} >
                  상세보기
                </Button>
                {this.state.isOpen ?
    <ViewDetail
    tochange={this.toChange} //toChange함수를 tochange로 받고있음 오류 주의
    isOpen={this.state.isOpen}
    markers={this.props.markers}
    id={this.props.id}
/>:false
         }
            </TableRow>
         
          
        );
    }
}

//서버쪽에 접근하기위함임 애초에 서버쪽에서 경로를 설정할때 user가 http://localhost:5000/image 경로로 접근한다고 서버코드에 명시해놨음 그래서 저부분을 써줘야하는것임
//{"http://localhost:5000"+this.props.image} 이부분에 대해서 자세히 공부해봐라
/*
{this.state.isOpen ?
    <ViewDetail
    tochange={this.toChange} //toChange함수를 tochange로 받고있음 오류 주의
    isOpen={this.state.isOpen}
    markers={this.props.markers}
   
/>:false
         }
         */