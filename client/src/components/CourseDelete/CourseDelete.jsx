import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class CourseDelete extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            open: false
        }
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }

    deleteCustomer(id){
    const url = 'http://localhost:5000/api/customer/'+ id; //이런식으로 접근해서 삭제가능
    fetch(url, {
        method:'DELETE'
    });
   window.location.reload();//this.props.stateRefresh();//
    
}    
 
handleClickOpen(){
    this.setState({
        open: true
    });
}

handleClose(){
    this.setState({
        file:null,
        category:'',
        title:'',
        text:'',
        wedo:'',
        kungdo:'',
        fileName:'',
        open:false
    })
}
    render() { 
        return (
          //  이상태로만해도 삭제발동됨 허나 꾸미고자하면 밑에 소스참고  <button onClick={(e)=>{this.deleteCustomer(this.props.id)}}>삭제</button>
         //dialog는 open속성을 무조건 명시해줘야함
         <div>
         <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>삭제</Button>
         <Dialog open={this.state.open}> 
             <DialogTitle >
                삭제경고
             </DialogTitle>
             <DialogContent>
                <Typography gutterBottom>
                    선택한 정보가 삭제됩니다.
                </Typography>
             </DialogContent>
             <DialogActions>
                <Button variant="contained" color="primary" onClick={(e)=>{this.deleteCustomer(this.props.id)}}> 삭제</Button> 
                <Button variant="outlined" color="primary" onClick={this.handleClose}> 닫기</Button> 

             </DialogActions>
         </Dialog>
         </div>

        )
    }

    
}

 

