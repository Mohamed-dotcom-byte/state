import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    fullName:'Mohamed Aziz Ben Chawacha',
    bio:'JS FullStack Developper',
    profession:'Automation engineer',
    show : false ,
    imgSrc: 'https://scontent-mrs2-1.xx.fbcdn.net/v/t1.0-9/86620257_2922709704452075_9124120883152027648_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=eJJPcc3jOjoAX_ck0Qj&_nc_ht=scontent-mrs2-1.xx&oh=7833b98e2faaf63782fba83002670796&oe=6004B321'
}; 
render () {
  return (
    <div className="App">
     <button onClick={() => this.setState({show:!this.state.show})}>click</button>
     {this.state.show 
     ?
      <div className="card">
        <div className="image">
          <img src={this.state.imgSrc} alt="myPhoto"/>
        </div>
        <div className="contents">
        <h2>{this.state.fullName}</h2>
        <p className="profession">{this.state.profession}</p>
        <p>{this.state.bio}</p>
        </div>
      </div>
      : <h1>Click the button</h1>


     }
    </div>
  );
}
}

export default App;
