import * as React from 'react';
import './Course.css';

import Checkbox from '@material-ui/core/Checkbox';
export default class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTrue:false
        };
        this.handlechange= this.handlechange.bind(this);
        this.inputcodilist = this.inputcodilist.bind(this);
        this.deletecodilist1 = this.deletecodilist1.bind(this);
    }

    handlechange(){
        this.setState({cheked:!this.state.cheked})
    }
    
    componentDidUpdate(){
        console.log('course: ', this.props.basket);
    }


    inputcodilist(){ 
                    //옷입히기 물품 25개 까지만 넣을수 있게함
       this.props.updateUsercodilist(         //리덕스에 변수를넣는부분!!!!!!!!!!!배열형식이니 concat으로 처리!!!!!!!!!!!!
        this.props.basket.concat(this.props.id)
        
       )
       console.log(this.props.basket);
        
       
        }

        deletecodilist1(){  //////////////////////////////삭제버큰누르면 해당 props.basket.에 해당하는 제품을 basket에서 삭제시키고 나머지들로 구성된배열로 갱신시킴 ,그러다보니 props.basket[0]의영향을 받는 canvas캡쳐도갱신됨 이상하게되는부분이있다.
            let a =this.props.basket.filter(c=> c !== this.props.id)
            this.props.updateUsercodilist(      
             a 
            )}
    render() {
       
        return (
            <div className='ssibal' style={{
                width: '33%',
                float: 'left'
            }}>
{this.props.id}      
<img src={"http://localhost:5000"+this.props.image} width='150' height='150'/><br/> 
{this.props.title}

<Checkbox
 checked={this.state.isTrue}
 onChange={e => {
   
   this.setState({ isTrue: e.target.checked });
   console.log(e.target.checked);
   console.log("111"+this.state.isTrue);
   if(this.state.isTrue === false)
   {
       //alert("등록  :  "+this.props.title);
       this.inputcodilist();
   }
   if(this.state.isTrue === true)
   {
       //alert("취소  :  "+this.props.title);
       this.deletecodilist1()
   }
 }}/>
          </div>
        );
    }
}

 
/*
var drawingFlag = false; // 선이 그려지고 있는 상태를 가지고 있을 변수입니다

var clickLine // 마우스로 클릭한 좌표로 그려질 선 객체입니다



// 지도에 클릭 이벤트를 등록합니다
// 지도를 클릭하면 선 그리기가 시작됩니다 그려진 선이 있으면 지우고 다시 그립니다
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {

    // 마우스로 클릭한 위치입니다 
    var clickPosition = mouseEvent.latLng;

    // 지도 클릭이벤트가 발생했는데 선을 그리고있는 상태가 아니면
    if (!drawingFlag) {

       
        // 클릭한 위치를 기준으로 선을 생성하고 지도위에 표시합니다
        clickLine = new kakao.maps.Polyline({
           
            path: [clickPosition], // 선을 구성하는 좌표 배열입니다 클릭한 위치를 넣어줍니다
         
        });
       
       
            
    } else { // 선이 그려지고 있는 상태이면

        // 그려지고 있는 선의 좌표 배열을 얻어옵니다
        var path = clickLine.getPath();

        // 좌표 배열에 클릭한 위치를 추가합니다
        path.push(clickPosition);
        
        // 다시 선에 좌표 배열을 설정하여 클릭 위치까지 선을 그리도록 설정합니다
        clickLine.setPath(path);

       
    }
});
    
// 지도에 마우스무브 이벤트를 등록합니다
// 선을 그리고있는 상태에서 마우스무브 이벤트가 발생하면 그려질 선의 위치를 동적으로 보여주도록 합니다
kakao.maps.event.addListener(map, 'mousemove', function (mouseEvent) {

    // 지도 마우스무브 이벤트가 발생했는데 선을 그리고있는 상태이면
    if (drawingFlag){
        
        // 마우스 커서의 현재 위치를 얻어옵니다 
        var mousePosition = mouseEvent.latLng; 

        // 마우스 클릭으로 그려진 선의 좌표 배열을 얻어옵니다
        var path = clickLine.getPath();
        
        // 마우스 클릭으로 그려진 마지막 좌표와 마우스 커서 위치의 좌표로 선을 표시합니다
    
       
    }             
});                 

// 지도에 마우스 오른쪽 클릭 이벤트를 등록합니다
// 선을 그리고있는 상태에서 마우스 오른쪽 클릭 이벤트가 발생하면 선 그리기를 종료합니다
kakao.maps.event.addListener(map, 'rightclick', function (mouseEvent) {

    // 지도 오른쪽 클릭 이벤트가 발생했는데 선을 그리고있는 상태이면
    

            var distance = Math.round(clickLine.getLength()); // 선의 총 거리를 계산합니다
              
                
            // 그려진 선의 거리정보를 지도에 표시합니다
            showDistance(content, path[path.length-1]);  
             
      
};



// 마우스 우클릭 하여 선 그리기가 종료됐을 때 호출하여 
// 그려진 선의 총거리 정보와 거리에 대한 도보, 자전거 시간을 계산하여
// HTML Content를 만들어 리턴하는 함수입니다
function getTimeHTML(distance) {

    // 도보의 시속은 평균 4km/h 이고 도보의 분속은 67m/min입니다
    var walkkTime = distance / 67 | 0;
    var walkHour = '', walkMin = '';

    // 계산한 도보 시간이 60분 보다 크면 시간으로 표시합니다
    if (walkkTime > 60) {
        walkHour = '<span class="number">' + Math.floor(walkkTime / 60) + '</span>시간 '
    }
    walkMin = '<span class="number">' + walkkTime % 60 + '</span>분'

    // 자전거의 평균 시속은 16km/h 이고 이것을 기준으로 자전거의 분속은 267m/min입니다
    var bycicleTime = distance / 227 | 0;
    var bycicleHour = '', bycicleMin = '';

    // 계산한 자전거 시간이 60분 보다 크면 시간으로 표출합니다
    if (bycicleTime > 60) {
        bycicleHour = '<span class="number">' + Math.floor(bycicleTime / 60) + '</span>시간 '
    }
    bycicleMin = '<span class="number">' + bycicleTime % 60 + '</span>분'

    // 거리와 도보 시간, 자전거 시간을 가지고 HTML Content를 만들어 리턴합니다
    var content = '<ul class="dotOverlay distanceInfo">';
    content += '    <li>';
    content += '        <span class="label">총거리</span><span class="number">' + distance + '</span>m';
    content += '    </li>';
    content += '    <li>';
    content += '        <span class="label">도보</span>' + walkHour + walkMin;
    content += '    </li>';
    content += '    <li>';
    content += '        <span class="label">자전거</span>' + bycicleHour + bycicleMin;
    content += '    </li>';
    content += '</ul>'

    return content;
}


*/