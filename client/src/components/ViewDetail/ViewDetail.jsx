import * as React from 'react';
import CustomerDelete from '../CustomerDelete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CourseDelete from '../CustomerDelete';
const { kakao } = window;
var clickLine;
var distance;
var clickPosition
export default class ViewDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            distance: '',
            walk: {
                hour: '',
                min: ''
            },
            bike: {
                hour: '',
                min: ''
            }
        };
        this.popUpClick= this.popUpClick.bind(this);
        this.initcourse= this.initcourse.bind(this);
       
    }


    popUpClick(){
        this.props.tochange(false);  //props는 일방적으로 값을 지정당하는대 함수면 이런식으로 값을 바꿀수있음??ㅇㅇ바꿀수있음
    }

    componentWillMount(){
        
    }
    componentDidMount(){
        console.log(this.props.markers); 
        this.initcourse();
    }
componentDidUpdate(nextProps, nextState){ //didupdate에서 두판떄기 과거판뗴기, 바뀐판떼기 있는데 그거 비교하는거에 사용, update사이클에서쓸수있는 매개변수임 nextprops,nextstate
    console.log(this.state);
    console.log(nextState);
    // if (this.state.distance === ) {
    //     this.initcourse();
    // }
}
initcourse(){
    {
        var clickLine = null;
        var distance=0;
        var path = [];
      
        this.props.markers !== ''
        ? 
       
        this.props.markers.map((c, index)=>{
            var clickPosition = new kakao.maps.LatLng(c.wedo,c.kungdo);

            if (index === 0) {
                clickLine = new kakao.maps.Polyline({
                    path: [clickPosition], // 선을 구성하는 좌표 배열입니다 클릭한 위치를 넣어줍니다
                });
                path = clickLine.getPath();
                // path.push(clickPosition);
            } else {
                path = clickLine.getPath();
                path.push(clickPosition);
            }
            console.log(path);
            clickLine.setPath(path);

            distance = Math.round(clickLine.getLength());
        }) 
        : null

        console.log('111111111111 '+distance);

        // 도보의 시속은 평균 4km/h 이고 도보의 분속은 67m/min입니다
    var walkkTime = distance / 67 | 0;
    var walkHour = '', walkMin = '';

    // 계산한 도보 시간이 60분 보다 크면 시간으로 표시합니다
    if (walkkTime >= 60) {
        walkHour = Math.floor(walkkTime / 60)
    }
    walkMin = walkkTime % 60

    console.error(walkHour + '시 ' +  walkMin + '분')

    // 자전거의 평균 시속은 16km/h 이고 이것을 기준으로 자전거의 분속은 267m/min입니다
    var bycicleTime = distance / 227 | 0;
    var bycicleHour = '', bycicleMin = '';

    // 계산한 자전거 시간이 60분 보다 크면 시간으로 표출합니다
    if (bycicleTime >= 60) {
        bycicleHour = Math.floor(bycicleTime / 60);
    }
        bycicleMin = bycicleTime % 60
    }

    console.error(bycicleHour, '시 ', bycicleMin, '분')

    this.setState({
            distance,
            walk: {
                hour: walkHour,
                min: walkMin
            },
            bike: {
                hour: bycicleHour,
                min: bycicleMin
            }
    })
}
    render() { 
        return (
          <div>
             {this.props.isOpen ? <div>  <Dialog open={this.props.isOpen  } fullWidth={true} maxWidth = {'md'}>
                    
            <DialogTitle>상세설명</DialogTitle>
            
            <DialogContent>
               
                {
                                  this.state.distance > 0 ?
                                    <>
                                        <span>총거리: {this.state.distance}m</span><br/>
                                        <span>도보: {this.state.walk.hour}시 {this.state.walk.min}분</span><br/>
                                        <span>자전거: {this.state.bike.hour}시 {this.state.bike.min}분</span><br/>
                                    </>
                                 : null
                              }
                
            {
                        this.props.markers !== ''
                        ? 
                        this.props.markers.map(c=>{
                            return(
                           <div>
                              <br/>
                              <img src ={"http://localhost:5000"+c.image} width='50' height='50'/><br/>
                              제목:{c.title}<br/> 내용:{c.text}
                            {/*  위도:{c.wedo}  경도:{c.kungdo}*/}
                              </div>
                            )
                        }) 
                        : null
                    }
            </DialogContent>
            <DialogActions>
                <Button variant ="outlined" color ="primary" onClick={this.popUpClick}> 닫기 </Button>
                <CourseDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/>
            </DialogActions>
        </Dialog> </div>:null}
        </div>
        )
}}



      
       

     

