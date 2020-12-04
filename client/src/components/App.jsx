import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Poplogin from './Poplogin';
import Maindisplay from './Maindisplay';
//너가 이미지 삽입을 위해서 여기를 확인했다면 첫번째 public폴더안에 있는 index.html으로 가봐라!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//<script src="https://code.jquery.com/jquery-3.4.1.js"></script>   그럼 이 두문장이 있을것이다 너는 script문을통해 url로 jquery와 fabric을사용해 그림을 그릴수 있게되는것이다.
//<script src="https://unpkg.com/fabric@4.0.0-beta.8/dist/fabric.js"></script>
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                width: '100%',
                height: '100%',
                position: 'relative'
            }}>
                <Switch>
                    <Route
                        exact
                        path='/'
                        component={Poplogin}  //component={Scatch}
                     />
                     
                    <Route
                        exact
                        path='/Maindisplay'
                        component={Maindisplay}  //component={Scatch}
                     />
                    

                </Switch>
            </div>
        );
    }
}

export default App;
