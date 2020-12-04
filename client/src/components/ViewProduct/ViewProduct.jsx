import * as React from 'react';


export default class ViewProduct extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log(this.props.markers);
    }
    render() { 
        return (
           <div>
                 {
                        this.props.markers !== ''
                        ? 
                       
                        this.props.markers.map(c=>{
                            return(
                           <div>
                              {c.title}<br/>
                              <img src ={"http://localhost:5000"+c.image} width='50' height='50'/></div>
                              
                            )
                        }) 
                        : null
                    }
           </div>
        );
    }
}

//서버쪽에 접근하기위함임 애초에 서버쪽에서 경로를 설정할때 user가 http://localhost:5000/image 경로로 접근한다고 서버코드에 명시해놨음 그래서 저부분을 써줘야하는것임
//{"http://localhost:5000"+this.props.image} 이부분에 대해서 자세히 공부해봐라

