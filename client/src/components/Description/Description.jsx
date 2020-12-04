import * as React from 'react';
import CustomerDelete from '../CustomerDelete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Description extends React.Component {
    constructor(props) {
        super(props);

        this.popUpClick= this.popUpClick.bind(this);
    }


    popUpClick(){
        this.props.tochange(false);  //props는 일방적으로 값을 지정당하는대 함수면 이런식으로 값을 바꿀수있음??ㅇㅇ바꿀수있음
    }
    render() { 
        return (
          <div>
             {this.props.isOpen ? <div>  <Dialog open={this.props.isOpen  } >
                    
            <DialogTitle>상세설명</DialogTitle>
            
            <DialogContent>
            <br/>
            <img src={"http://localhost:5000"+this.props.image} width='350' height='230' onClick={this.handleClick}/><br/>
               카테고리: {this.props.category}<br/><br/>
               제목:  {this.props.title}<br/><br/>
               내용:  {this.props.text}<br/><br/>
               생성날짜: {this.props.createDate}<br/><br/><br/>
               위도: {this.props.wedo}<br/>
               경도:  {this.props.kungdo}<br/>
            </DialogContent>
            <DialogActions>
               
                <Button variant ="outlined" color ="primary" onClick={this.popUpClick}> 닫기 </Button>
                <CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/>
            </DialogActions>
        </Dialog> </div>:null}
        </div>
        )
    
}}

/*return (
    <div style={{
        display: this.props.isOpen   ?  true: 'none',
        backgroundColor:'skyblue',
        marginLeft:'65%',
        width:'100%',
        height:'70%',
        position: 'absolute',
        top: '0',
        
        }}>
       
          <img src={"http://localhost:5000"+this.props.image} width='150' height='150' onClick={this.handleClick}/><br/>
            {this.props.category}<br/>
            {this.props.title}<br/>
           {this.props.text}<br/>
           {this.props.wedo}<br/>
           {this.props.kungdo}<br/>
        <button onClick ={this.popUpClick}>상세정보나가기</button>
    </div>
        
    )
*/
