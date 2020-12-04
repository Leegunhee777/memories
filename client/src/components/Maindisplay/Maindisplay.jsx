import * as React  from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';
import {post} from 'axios';
import axios from 'axios';
import Customer from '../Customer';
import AddCourse from '../AddCourse';
import ViewCourse from '../ViewCourse';
import Tooltip from '../Tooltip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper'; //컴포넌트의 외부를감싸기위해사용하는놈
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useEffect } from 'react';



import store from '@app/store';
import { authActions } from '@app/store/appAuth';


 
const { kakao } = window;
var map = null;
var markers = [];
let latlng = '';
var date='';
export default class Maindisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addcourse:false,
            customers:"",
            searchKeyword:"" ,//모든문자열은 공백을 가지고있으므로 공백일경우에는 모든 data가 나옴
            searchKeyword2:"" ,
            file: null, //프로필이미지를 파일형태로 보내기위함
            category:'',
            title:'',
            text:'',
            wedo:'',
            kungdo:'',
            fileName:'',
            fruit:'',
            fruit2:'',
            fruit3:'',
            coursecate:'',
            coursename:'',
            date:'',
            coursedata:[
                {
                    "id": 30,
                    "title": "아라비아바이어",
                    "category": "업무용",
                    "markers": [
                        {
                            "id": 5,
                            "wedo": "37.55104962018512",
                            "kungdo": "126.99645788200863",
                            "image": "/image/df5ac643d05b38d286e57e919af11e53",
                            "title": "업무용!!!!!!!!1",
                            "text": "업무용맛집",
                            "category": "업무용",
                            "createdAt": "2020-06-10T06:39:58.000Z",
                            "updatedAt": "2020-06-10T06:39:58.000Z",
                            "deletedAt": null,
                            "userId": 2
                        },
                        {
                            "id": 7,
                            "wedo": "37.567537936446506",
                            "kungdo": "126.9825500551241",
                            "image": "/image/ef132f316a2c4c5b60fda7a5d87c5e7b",
                            "title": "치킨존맛",
                            "text": "치킨맛집",
                            "category": "맛집",
                            "createdAt": "2020-06-10T06:51:04.000Z",
                            "updatedAt": "2020-06-10T06:51:04.000Z",
                            "deletedAt": null,
                            "userId": 2
                        },
                        {
                            "id": 9,
                            "wedo": "37.55065165572863",
                            "kungdo": "126.98069386218846",
                            "image": "/image/d1fc6e9da2b5eb0da20f88d4b0fd2b46",
                            "title": "완전 떡볶이존맛탱",
                            "text": "ㅇㅎ휴ㅜㅜㅠ",
                            "category": "맛집",
                            "createdAt": "2020-06-10T06:56:04.000Z",
                            "updatedAt": "2020-06-10T06:56:04.000Z",
                            "deletedAt": null,
                            "userId": 2
                        }
                    ]
                },
                {
                    "id": 29,
                    "title": "주말테이트",
                    "category": "데이트",
                    "markers": [
                        {
                            "id": 4,
                            "wedo": "37.54304797859616",
                            "kungdo": "126.98604803622734",
                            "image": "/image/2dc969c24b1798b2ff05ac8d0ec4440b",
                            "title": "재밌는데이투",
                            "text": "오늘남산에서 맛있는것을먹으며",
                            "category": "데이트",
                            "createdAt": "2020-06-10T06:38:35.000Z",
                            "updatedAt": "2020-06-10T06:38:35.000Z",
                            "deletedAt": null,
                            "userId": 2
                        },
                        {
                            "id": 6,
                            "wedo": "37.55050826979621",
                            "kungdo": "126.9862163945696",
                            "image": "/image/77d16cd56e0400fe54780bf50a9b3279",
                            "title": "기분좋은언덕",
                            "text": "정말산들바람이시원하고",
                            "category": "여행",
                            "createdAt": "2020-06-10T06:47:38.000Z",
                            "updatedAt": "2020-06-10T06:47:38.000Z",
                            "deletedAt": null,
                            "userId": 2
                        }
                       
                    ]
                }
            ]
           
        }
      
        this.stateRefresh = this.stateRefresh.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleClickClosedial = this.handleClickClosedial.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.addCustomer = this.addCustomer.bind(this);
        this.asd = this.asd.bind(this);
        this.sd = this.sd.bind(this);
        this.d = this.d.bind(this);
        this.e = this.e.bind(this);
        this.addCourseOpen = this.addCourseOpen.bind(this);
        this.addCourseClose = this.addCourseClose.bind(this);
        this.submitCourse = this.submitCourse.bind(this);
        this.fordate = this.fordate.bind(this);
        this.dateprint = this.dateprint.bind(this);
        this.addCourse = this.addCourse.bind(this);
        this.handleFormSubmit2 = this.handleFormSubmit2.bind(this);
      
       
    }

    stateRefresh = () =>{  //추가하기 버튼 눌렀을때 전체가 새로고침되는 비효율성을 막기위한 조치 cusomeradd의 51번째,40번째줄확인
        return new Promise((resolve, reject) => {
            this.setState({   
                customers:'',
                searchKeyword:''
            });
            callApi()
            .then(res => {this.setState({customers:res}); resolve(res);})
            .catch(err => console.log(err));
        })
    }

    componentDidMount(){
        callApi()
        .then(res => {this.setState({customers:res});  setmap(res);   console.log(res); console.log(this.state.customers);} )
        .catch(err => console.log(err));

      //  callApi2()    //이거 주석풀고 callApi2()함수에 니가 던지는 course데이터 보내는 경로 적으면된다.
       // .then(res => {this.setState({coursedata:res});   console.log(res); console.log(this.state.coursedata);} )
       // .catch(err => console.log(err));

        this.fordate();
        console.log(this.state.coursedata);
    }

   
    componentDidUpdate() {
        if (this.state.kungdo !== latlng.Ga || this.state.wedo !== latlng.Ha) {
            console.log('test');
            this.setState({
                kungdo:latlng.Ga,
                wedo:latlng.Ha
            })
        }
        this.asd;
        this.fordate;
        console.log(this.state.coursecate);
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClickClosedial(){
        this.props.updateIsShowDial(false);
    }

   
//////////////////////////////////
    handleFormSubmit = (e)=>{
        e.preventDefault()//데이터가 서버로 전달됨에 있어서 오류가발생하지않도록 함수를 불러와줌 
        this.asd() 
        this.addCustomer()
        .then((response)=>{//서버로부터 response를 통해 어떠한 데이터가 왔을때 건너온 데이터를 console.log로 찍음
            console.log(response.data);
            this.addMarker(latlng);
            this.props.updateIsShowDial(false);
        
           // window.location.reload();//리엑트는 변화하는부분만 변화하므로 추가된 데이터를 관찰하기위해서,새로고침역할을 해주는거임
            //그래서 원래는 변화하는 부분만 통제해야하기떄문에 추가하기 버튼눌렀을때 전체가 새로고침하게 하면안됨
        })
    }
    
    handleFileChange = (e)=>{
        this.setState({
          
            file: e.target.files[0], //우리는 파일데이터를 하나만 넘기니 파일들중에서 [0]만저장하는거임
            fileName: e.target.value
        })
    }
    
    handleValueChange = (e)=>{
        let nextState ={};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = ()=>{
        const url = 'http://localhost:5000/api/customer';
        const formData = new FormData();
        formData.append('image',this.state.file)
        formData.append('category',this.state.fruit)
        formData.append('title',this.state.title)
        formData.append('text',this.state.text)
        formData.append('wedo',this.state.wedo)
        formData.append('kungdo',this.state.kungdo)
        //전달하고자하는 data에 파일이 포함되어있을때, 서버에 전송할때는 웹표준에 맞는 헤더를 추가해줘야한다
        const config ={
            headers:{
                'content-type':'multipart/form-data'
            }
        }
        return post(url,formData,config); //axios에 있는post라이브러리를 이용해서 해당 url의 formData를 해당환경설정에맞게 헤더를 붙여서 실제로 서버로 데이터를 보내는거임
    }


    addCourse = ()=>{
        console.log(this.props.basket);
        const url = 'http://localhost:5000/api/customerwe';
        const formData = new FormData();
        formData.append('coursecate',this.state.coursecate)
        formData.append('coursename',this.state.coursename)
        formData.append('dotinfo',this.props.basket)
       
        const config ={
            headers:{
                'content-type':'multipart/form-data'
            }
        }
        return post(url,formData,config); 
    }

   
    handleFormSubmit2 = (e)=>{
   
        e.preventDefault()//데이터가 서버로 전달됨에 있어서 오류가발생하지않도록 함수를 불러와줌  
       
        this.addCourse();
        console.log(this.props.basket);
        this.addCourseClose();
     //   .then((response)=>{//서버로부터 response를 통해 어떠한 데이터가 왔을때 건너온 데이터를 console.log로 찍음
         //   console.log(response.data);
         
           
                           //  window.location.reload();
           // window.location.reload();//리엑트는 변화하는부분만 변화하므로 추가된 데이터를 관찰하기위해서,새로고침역할을 해주는거임
            //그래서 원래는 변화하는 부분만 통제해야하기떄문에 추가하기 버튼눌렀을때 전체가 새로고침하게 하면안됨
       // })
    }
    
    
  // 마커를 생성하고 지도위에 표시하는 함수입니다
    async addMarker(position, data) {
        
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: position
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
        
        // 생성된 마커를 배열에 추가합니다
        markers.push(marker);

        const test = await this.stateRefresh(); //이런식으로 부분적으로 새로고침을해야함
        console.log('ttttt:', test);

        showOverlay(marker, test[test.length - 1]);
        this.setState({
            file:null,
            category:'',
            title:'',
            text:'',
            wedo:'',
            kungdo:'',
            fileName:'',
            
            opencontrol:false
        })
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
            fruit:'',
            opencontrol:false
        })

        this.props.updateIsShowDial(false);
    }
    
    asd(){  
       var s = document.getElementById("fruit");
        this.setState({fruit:s.options[s.selectedIndex].value})
        console.log(this.state.fruit);
        }

        sd(){  
            var u = document.getElementById("cate");
             this.setState({fruit2:u.options[u.selectedIndex].value})
             console.log(this.state.fruit2);
             }

             d(){  
                var u = document.getElementById("coursecate");
                 this.setState({fruit3:u.options[u.selectedIndex].value})
                 console.log(this.state.fruit3);
                 }

                 
             e(){  
                var u = document.getElementById("coursecate2");
                 this.setState({coursecate:u.options[u.selectedIndex].value})
                 console.log(this.state.coursecate);
                 }
    
    



   /* var p = document.getElementById("date");
    this.setState({date:p.options[p.selectedIndex].value})
    console.log(this.state.date);
    */

fordate(){
    $('#date').change(function (){
         date = $('#date').val();
    //    alert(date);
       
    });
    
}

dateprint(){
  //  alert(date);
   this.setState({date:date});
   console.log(this.state.date);
}
           addCourseOpen(){
                this.setState({
                    addcourse: true
                });
            }
            
            addCourseClose(){
                
            this.setState({
                addcourse: false,
                coursecate:'',
                coursename:'',
            });
        }
            
        submitCourse(){
           // console.log(this.props.basket);
        }
        re(){
            window.location.reload(); // console.log(this.props.basket);
         }
    render() {
        
      

     //   console.log('ttttt: ', this.props.basket);
        const filteredcomponents = (data) => {
            data = data.filter((c) => {
                return c.category.indexOf(this.state.fruit2) > -1;
            });
            data = data.filter((c) => {
                return c.createDate.indexOf(this.state.date) > -1;
            });
            return data.map((c) => {
                return  <Customer 
                stateRefresh={this.stateRefresh}
                key={c.id}//map을 사용할때는 기본적으로 key값을 설정해줘야 에러안뜸
                id={c.id}
                image={c.image}
                category={c.category}
                title={c.title}
                text={c.text}
                createDate={c.createDate}
                wedo={c.wedo}
                kungdo={c.kungdo}
               
                /> 
            });
        }
        const filteredcomponents2 = (data) => {
            data = data.filter((c) => {
                return c.category.indexOf(this.state.fruit3) > -1;
            });
           
            return data.map((c) => {
                return  <ViewCourse 
                stateRefresh={this.stateRefresh}
                key={c.id}//map을 사용할때는 기본적으로 key값을 설정해줘야 에러안뜸
                id={c.id}
                category={c.category}
                markers={c.markers}
                title={c.title}
                /> 
            });
        }
        return (
            <div> 
                <Tooltip/>
              <div>
                <div id="map" style={{width:'800px',height:'500px'}}></div>
             
                <button onClick={hideMarkers}>마커 감추기</button>
                <button onClick={showMarkers}>마커 보이기</button>
               
                <div id="clickLatlng"></div>
{/*닷추가관련/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
 
                {this.props.isShow ? <div> <Dialog open={this.props.isShow} onClose={this.handleClose}>
                                           <DialogTitle>기록추가</DialogTitle>
                                           <DialogContent>
                                            기록 이미지:<input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br/><br/>
                                            카테고리: <select name='fruit' id='fruit'>
                                            <option value="여행">여행</option>
                                            <option value="취미">취미</option>
                                            <option value="맛집">맛집</option>
                                            <option value="데이트">데이트</option>
                                            <option value="업무용">업무용</option>
                                            </select>
                                            <button onClick={this.asd}>선택</button>
                                            <TextField style={{
                                            display:'none'}}type='text' label="카테고리" type ="text" name ="category" value= {this.state.fruit} onChange={this.handleValueChange}/><br/>
                                            <TextField label="title" type="text" name="title" value={this.state.title} onChange={this.handleValueChange}/><br/>
                                            <TextField label="text" type="text" name="text" value={this.state.text} onChange={this.handleValueChange}/><br/>
                                            <TextField label="위도" type="text" name="wedo" value={latlng.Ga} onChange={this.handleValueChange}/><br/>
                                            <TextField label="경도" type="text" name="kungdo" value={latlng.Ha}  onChange={this.handleValueChange}/><br/>
                                            </DialogContent>
                                            <DialogActions>
                                            <Button variant ="contained" color ="primary" onClick={this.handleFormSubmit}> 추가 </Button>
                                            <Button variant ="outlined" color ="primary" onClick={this.handleClickClosedial}> 닫기 </Button>
                                            </DialogActions>
                                            </Dialog> </div>:null}
                                            </div>
             
 {/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
 




 {/*닷정보 보여주는 부분///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div style={{
           display: true,
            backgroundColor:'BurlyWood',
            marginLeft:'53%',
            width:'270px',
            height:'70%',
            position: 'absolute',
            top: '0',
            overflow:'scroll'
            }}>
            
               카테고리: <select name='cate' id='cate'>
               <option value="" >전체</option>
                    <option value="여행">여행</option>
                    <option value="취미">취미</option>
                    <option value="맛집">맛집</option>
                    <option value="데이트">데이트</option>
                    <option value="업무용">업무용</option>
                       </select>
                       <button onClick={this.sd}>검색</button>
                 <input style={{
        display:'none'}}type ="text" name ="searchKeyword" value={this.state.fruit2} onChange={this.handleValueChange}/><br/>
      
      <input type="date" id = "date"/>

      <button onClick={this.dateprint}>조회</button>
      <input style={{
        display:'none'}}type ="text" name ="searchKeyword" value={this.state.date} onChange={this.handleValueChange}/><br/>
      
      <button onClick={this.re}>조회초기화</button>
        
    <br/><br/>
                    {
                        this.state.customers !== ''
                        ? 
                        filteredcomponents(this.state.customers):null
                       
                    }
                </div>   
         
 {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}   
 {/*코스정보 보여주는 부분///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}     
 <Button variant ="contained" color="primary" onClick={this.addCourseOpen} >
                    코스추가하기
                </Button>

                <Dialog open={this.state.addcourse}  fullWidth={true} maxWidth = {'md'}>
                    
                    <DialogTitle>코스추가</DialogTitle>
                    
                    <DialogContent>
                    카테고리: <select name='coursecate2' id='coursecate2'>
                                            <option value="여행">여행</option>
                                            <option value="취미">취미</option>
                                            <option value="맛집">맛집</option>
                                            <option value="데이트">데이트</option>
                                            <option value="업무용">업무용</option>
                                            </select>
                                            <button onClick={this.e}>선택</button>
                                            <TextField style={{
                                            display:'none'}} label="카테고리" type="text"   name ="coursecate2" value={this.state.coursecate} onChange={this.handleValueChange}/> <br/>
                   <TextField label="코스이름" type="text"   name ="coursename" value={this.state.coursename} onChange={this.handleValueChange}/>
                    <br/>
                    {
                        this.state.customers !== ''
                        ? 
                       <AddCourse customers= {this.state.customers}/>:null
                    }
                    </DialogContent>
                    <DialogActions>
                        <Button variant ="contained" color ="primary" onClick={this.handleFormSubmit2}> 추가 </Button>
                        <Button variant ="outlined" color ="primary" onClick={this.addCourseClose}> 닫기 </Button>

                    </DialogActions>
                </Dialog>
        
{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
<br/><br/>
코스카테고리: <select name='coursecate' id='coursecate'>
               <option value="" >전체</option>
                    <option value="여행">여행</option>
                    <option value="취미">취미</option>
                    <option value="맛집">맛집</option>
                    <option value="데이트">데이트</option>
                    <option value="업무용">업무용</option>
                       </select>
                       <button onClick={this.d}>검색</button>
                 <input style={{
        display:'none'}}type ="text" name ="searchKeyword" value={this.state.fruit3} onChange={this.handleValueChange}/><br/>
                  
                <Table  style={{
        width:'850px'}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell>코스카테고리</TableCell>
                            <TableCell>코스이름</TableCell>
                            <TableCell>경유지</TableCell>
                         
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        this.state.coursedata !== ''
                        ? 
                        filteredcomponents2(this.state.coursedata):null
                        /*this.state.customers.map(c=>{
                            return(
                            <Customer
                            stateRefresh={this.stateRefresh}
                            key={c.id}//map을 사용할때는 기본적으로 key값을 설정해줘야 에러안뜸
                            id={c.id}
                            image={c.image}
                            name={c.name}
                            birthday={c.birthday}
                            gender={c.gender}
                            job={c.job}
                            />
                            )
                        }) 
                        : null*/
                    }
                    </TableBody>
                </Table>
       
           
            </div>
        );
    }
}

function showOverlay(marker, data) {
    // 커스텀 오버레이에 표시할 컨텐츠 입니다
    // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
    // 별도의 이벤트 메소드를 제공하지 않습니다 

    /* var content = '<div class="wrap">' + 
     '<div class="info">' + 
     '<div class="title">' + 
     '카카오 스페이스닷원' + 
     '<div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
     '</div>' + 
     '<div class="body">' + 
     '<div class="img">' +
     '<img src="https://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70">' +
     '</div>' + 
     '<div class="desc">' + 
     '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' + 
     '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' + 
     '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' + 
     '            </div>' + 
     '        </div>' + 
     '    </div>' +    
  */   '</div>';
    console.log(data);

    var content = `<div class='main'>
    <div class='info'>
        <div class='title'>
        ${data.hasOwnProperty('category') ?  '<'+data.category+'>' : null}
        ${data.hasOwnProperty('title') ? data.title : null}
       
        </div>
        <div class='body'>
        <img src=${data.hasOwnProperty('image') ? 'http://localhost:5000' + data.image : null} width="60" height="60" style="margin-left:20%;"/> 
       
        </div>
        </div>
    <div>`;
    
//img localgost:5000뒤에  data.image 제일앞에있는 /를 없애 줘야함
    // 마커 위에 커스텀오버레이를 표시합니다
    // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
    var overlay = new kakao.maps.CustomOverlay({
    content: content,
    map: map,
    position: marker.getPosition()       
    });

    // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        overlay.setMap(map);
    });
}

const callApi = async () => {
    const response = await fetch('http://localhost:5000/api/customer')
    const body = await response.json();
   // console.log(body); //consolelog찍어보면 res로 image경로가 제대로넘어오긴한다 근데 나오질않는다 시발!!!
    return body;
}

const callApi2 = async () => {
    const response = await fetch('http://localhost:5000/api/customer')
    const body = await response.json();
   // console.log(body); //consolelog찍어보면 res로 image경로가 제대로넘어오긴한다 근데 나오질않는다 시발!!!
    return body;
}


  function setmap(c){
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(37.548607185217676, 126.98640912176872), //지도의 중심좌표.
        level: 8 //지도의 레벨(확대, 축소 정도)
    };
    map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    adddatabase(c);

    // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
        // 클릭한 위도, 경도 정보를 가져옵니다 
        latlng = mouseEvent.latLng; 
        console.log('111111111111111111'+mouseEvent);
        console.log('222222222222222'+mouseEvent.latLng);
        store.dispatch(authActions.updateConfigData.updateIsShowDialForMap(true));
        var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
        message += '경도는 ' + latlng.getLng() + ' 입니다';
        var resultDiv = document.getElementById('clickLatlng'); 
        resultDiv.innerHTML = message;
       
        
    });
  }

  function adddatabase(c){
      console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      console.log(c[0].wedo);
     for(var i =0 ; i< c.length ; i++)
     {
        var markerPosition = new kakao.maps.LatLng(c[i].wedo,c[i].kungdo); 

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
        // 지도에 마커를 표시합니다
        showOverlay(marker, c[i]);
                                                                                                      //생성된 마커를 배열에 추가합니다   
                                                                                                         markers.push(marker);

     } 
  }

                                                                                                       // 배열에 추가된 마커들을 지도에 표시하거나 삭제하는 함수입니다
                                                                                                       function setMarkers(map) {
                                                                                                            console.log(3);
                                                                                                             for (var i = 0; i < markers.length; i++) {
                                                                                                                    markers[i].setMap(map);
                                                                                                                }            
                                                                                                                 }

// "마커 보이기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에 표시하는 함수입니다
function showMarkers() {
    console.log(1);
    setMarkers(map)    
}

// "마커 감추기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에서 삭제하는 함수입니다
function hideMarkers() {
    console.log(2);
    setMarkers(null);    
}

 function tre(){
$('#date').change(function (){
    var date = $('#date').val();
    alert(date);
});
 }


/*    // 지도를 클릭한 위치에 표출할 마커입니다         //초기값셋팅할때 썻던놈임
    var marker = new kakao.maps.Marker({ 
        // 지도 중심좌표에 마커를 생성합니다 
        position: map.getCenter() 
    }); 
    // 지도에 마커를 표시합니다
    marker.setMap(map);
    
    showOverlay(marker, {
        image: 'https://cfile181.uf.daum.net/image/250649365602043421936D',
        title: '카카오 스페이스닷원',
        text: '카카오 스페이스닷원'
    });
*/
 
 /*this.state.customers.map(c=>{
                            return(
                            <Customer
                            stateRefresh={this.stateRefresh}
                            key={c.id}//map을 사용할때는 기본적으로 key값을 설정해줘야 에러안뜸
                            id={c.id}
                            image={c.image}
                            name={c.name}
                            birthday={c.birthday}
                            gender={c.gender}
                            job={c.job}
                            />
                            )
                        }) 
                        : null*/
